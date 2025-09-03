import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false, // game start status
      ballPosition: 0, // X position of ball
    };
  }

  // Handle button click → start game
  buttonClickHandler = () => {
    this.setState({ started: true });
  };

  // Handle Right Arrow key press
  handleKeyDown = (event) => {
    if (event.keyCode === 39) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  };

  // Mount → add event listener
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Cleanup
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // Decide what to render
  renderChoice = () => {
    if (!this.state.started) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    } else {
      return (
        <div
          className="ball"
          style={{
            position: "absolute",
            left: this.state.ballPosition + "px",
            top: "100px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "green",
          }}
        ></div>
      );
    }
  };

  render() {
    return <div>{this.renderChoice()}</div>;
  }
}

export default App;
