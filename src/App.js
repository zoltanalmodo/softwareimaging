import React from 'react';
import './App.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CalcControlPoints from './CalcControlPoints';

export default class App extends React.Component {

  state = {
    curveIntervals: 50,
    startPointX: 20,
    startPointY: 400,
    firstControlPointX: 20,
    firstControlPointY: 20,
    secondControlPointX: 400,
    secondControlPointY: 400,
    endPointX: 400,
    endPointY: 20,
  }
  onClick = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }


  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }


  render() {
    return (
      <React.Fragment>
        <Form >
          <h3>Draw a Bezier curve</h3>
          <br></br>
          <FormGroup row>
            <Label for="intervals"
              sm={6}>Curve intervals:
          </Label>
            <Col sm={4}>
              <Input
                type="number"
                id="curveIntervals"
                min={1}
                max={100}
                step="1"
                value={this.state.curveIntervals}
                onChange={this.onChange}
                placeholder="number placeholder"
              />
              <FormText color="muted">
                Please enter a number between
                <br></br>1 - 100 for intervals
                <br></br>
              </FormText>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="start point"
              sm={6}>Start point coordinates: X, Y,
          </Label>
            <Col sm={2}>
              <Input
                type="number"
                id="startPointX"
                min={0}
                max={900}
                step="1"
                value={this.state.startPointX}
                onChange={this.onChange}
                placeholder="number placeholder"
              />
            </Col>
            <Col sm={2}>
              <Input
                type="number"
                id="startPointY"
                min={0}
                max={900}
                step="1"
                value={this.state.startPointY}
                onChange={this.onChange}
                placeholder="number placeholder"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="first control point"
              sm={6}>First control point coordinates: X, Y,
          </Label>
            <Col sm={2}>
              <Input
                type="number"
                id="firstControlPointX"
                min={0}
                max={900}
                step="1"
                value={this.state.firstControlPointX}
                onChange={this.onChange}
                placeholder="number placeholder"
              />
            </Col>
            <Col sm={2}>
              <Input
                type="number"
                id="firstControlPointY"
                min={0}
                max={900}
                step="1"
                value={this.state.firstControlPointY}
                onChange={this.onChange}
                placeholder="number placeholder"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="second control point"
              sm={6}>Second control point coordinates: X, Y,
          </Label>
            <Col sm={2}>
              <Input
                type="number"
                id="secondControlPointX"
                min={0}
                max={900}
                step="1"
                value={this.state.secondControlPointX}
                onChange={this.onChange}
                placeholder="number placeholder"
              />
            </Col>
            <Col sm={2}>
              <Input
                type="number"
                id="secondControlPointY"
                min={0}
                max={900}
                step="1"
                value={this.state.secondControlPointY}
                onChange={this.onChange}
                placeholder="number placeholder"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="end control point"
              sm={6}>End point coordinates: X, Y,
          </Label>
            <Col sm={2}>
              <Input
                type="number"
                id="endPointX"
                min={0}
                max={900}
                step="1"
                value={this.state.endPointX}
                onChange={this.onChange}
                placeholder="number placeholder"
              />
            </Col>
            <Col sm={2}>
              <Input
                type="number"
                id="endPointY"
                min={0}
                max={900}
                step="1"
                value={this.state.endPointY}
                onChange={this.onChange}
                placeholder="number placeholder"
              />
            </Col>
            <Label for="coordinates info"
              sm={6}>
            </Label>
            <Col sm={4}>
            <FormText color="muted">
                Please enter a number between
                <br></br>
                0 - 900 for control point coordinates
              </FormText>
            </Col>
          </FormGroup>
          
          

          <FormGroup check row>
            <Col sm={{ size: 4, offset: 8 }}>
              <Button onClick={this.onClick} >Draw</Button>
            </Col>
          </FormGroup>
        </Form>

        <CalcControlPoints points = {this.state} />
      </React.Fragment>

    );
  }
}
