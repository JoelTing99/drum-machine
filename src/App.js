import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import drumSounds from "./drumSound.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: "",
    }

    this.handleClipPlay = this.handleClipPlay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  componentDidMount() {
    document.querySelectorAll(".drum-pad").forEach(button => {
      button.addEventListener("click", () => this.handleClipPlay(button.id));
    });

    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.querySelectorAll(".drum-pad > button").forEach(button => {
      button.removeEventListener("click", this.handleClipPlay);
    });

    document.removeEventListener("keydown", this.handleKeyPress)
  }

  handleClipPlay(id) {
    let audio = document.getElementById(id).childNodes[0];

    //stop the sound
    //audio.pause();
    //audio.currentTime = 0;

    //play the sound
    audio.play();

    //update display text
    this.handleDisplay(id.replace("-", " "));
  }

  handleKeyPress(event) {
    let sound = drumSounds.filter(clip => clip.keyCode === event.keyCode);

    if (sound.length === 0) return;


    let id = sound[0].id;

    this.handleClipPlay(id);
  }

  handleDisplay(displayText) {
    this.setState({
      displayText: displayText,
    });
  }

  render() {
    return (
      <Container id="drum-machine" className="text-center p-3">
        <Row>
          <Col className="pads-container" sm={8}>
            <Container className="pads d-grid gap-2" fluid>
              <Row>
                <Col className="drum-pad" id="Heater-1">
                  <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                  <Button className="p-3" variant="secondary" size="lg">Q</Button>
                </Col>
                <Col className="drum-pad" id="Heater-2">
                  <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                  <Button className="p-3" variant="secondary">W</Button>
                </Col>
                <Col className="drum-pad" id="Heater-3">
                  <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                  <Button className="p-3" variant="secondary">E</Button>
                </Col>
              </Row>
              <Row>
                <Col className="drum-pad" id="Heater-4">
                  <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                  <Button className="p-3" variant="secondary">A</Button>
                </Col>
                <Col className="drum-pad" id="Clap">
                  <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                  <Button className="p-3" variant="secondary">S</Button>
                </Col>
                <Col className="drum-pad" id="Open-HH">
                  <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                  <Button className="p-3" variant="secondary">D</Button>
                </Col>
              </Row>
              <Row>
                <Col className="drum-pad" id="Kick-n'-Hat">
                  <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                  <Button className="p-3" variant="secondary">Z</Button>
                </Col>
                <Col className="drum-pad" id="Kick">
                  <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                  <Button className="p-3" variant="secondary">X</Button>
                </Col>
                <Col className="drum-pad" id="Closed-HH">
                  <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                  <Button className="p-3" variant="secondary">C</Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="display-col" sm={4}>
            <p id="display">
              {this.state.displayText}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
