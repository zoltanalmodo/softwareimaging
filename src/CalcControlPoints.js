import React from 'react';

export default class CalcControlPoints extends React.Component {

    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();
    }

    CalcControlPoints(t, p0, p1, p2, p3) {
        let cX = 3 * (p1.x - p0.x),
            bX = 3 * (p2.x - p1.x) - cX,
            aX = p3.x - p0.x - cX - bX;

        let cY = 3 * (p1.y - p0.y),
            bY = 3 * (p2.y - p1.y) - cY,
            aY = p3.y - p0.y - cY - bY;

        let x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
        let y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.y;

        return { x: x, y: y };
    }


    componentDidMount() {

        this.ctx = this.canvasRef.current.getContext('2d');
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "green";
        document.body.appendChild(this.ctx.canvas);
        this.draw();

    }


    draw() {
        const { points } = this.props

        const intervals = points.curveIntervals 

        const p0 = {
                    x: Math.round(points.startPointX),
                    y: Math.round(points.startPointY)
                    }
        const p1 = {
                    x: Math.round(points.firstControlPointX),
                    y: Math.round(points.firstControlPointY)
                    }
        const p2 = {
                    x: Math.round(points.secondControlPointX),
                    y: Math.round(points.secondControlPointY) 
                    }
        const p3 = {
                    x: Math.round(points.endPointX),
                    y: Math.round(points.endPointY)
                    }


        this.ctx.clearRect(0, 0, 900, 900);


        this.ctx.beginPath()
        this.ctx.moveTo(p0.x, p0.y);
        
        for (let t = 0; t <= 1; t += (1 / Math.round(intervals))) {
            let returnedPoints = []
            let point = this.CalcControlPoints(t, p0, p1, p2, p3);
            returnedPoints.push(point.x, point.y);
            this.ctx.lineTo(point.x, point.y);
        }

        // put returnedPoints to state !!!

        this.ctx.stroke()

    }

    render() {

        if (this.ctx) {
            this.draw();
        }
        return (
            <React.Fragment>
                <canvas ref={this.canvasRef} width={900} height={900} />
            </React.Fragment>
        );

    }

}