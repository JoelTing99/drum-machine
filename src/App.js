import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    document.querySelectorAll(".drum-pad > button").forEach(button => {
      button.addEventListener("click", () => {return console.log(button.parentNode.id)});
    });
  }

  componentWillUnmount() {
    document.querySelectorAll(".drum-pad > button").forEach(button => {
      button.removeEventListener("click", () => {return console.log(button)});
    });
  }

  handleClipPlay(id) {

  }

  handleKeyPress(event) {

  }

  render() {
    return (
      <Container id="drum-machine" className="text-center">
        <Row>
          <Col className="pads-container">
            <Container className="pads" fluid>
              <Row>
                <Col className="drum-pad" id="Heater-1">
                  <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                  <Button>Q</Button>
                </Col>
                <Col className="drum-pad" id="Heater-2">
                  <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                  <Button>W</Button>
                </Col>
                <Col className="drum-pad" id="Heater-3">
                  <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                  <Button>E</Button>
                </Col>
              </Row>
              <Row>
                <Col className="drum-pad" id="Heater-4">
                  <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                  <Button>A</Button>
                </Col>
                <Col className="drum-pad" id="Clap">
                  <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                  <Button>S</Button>
                </Col>
                <Col className="drum-pad" id="Open-HH">
                  <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                  <Button>D</Button>
                </Col>
              </Row>
              <Row>
                <Col className="drum-pad" id="Kick-n'-Hat">
                  <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                  <Button>Z</Button>
                </Col>
                <Col className="drum-pad" id="Kick">
                  <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                  <Button>X</Button>
                </Col>
                <Col className="drum-pad" id="Closed-HH">
                  <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                  <Button>C</Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col id="display">

          </Col>
        </Row>
      </Container>
    );
  }
}
