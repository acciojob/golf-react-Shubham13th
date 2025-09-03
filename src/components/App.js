import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      ballPosition: 0
    };
  }

  // Start the game
  buttonClickHandler = () => {
    this.setState({ started: true });
  };

  // Handle Right Arrow key press
  handleKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5
      }));
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div>
        {!this.state.started ? (
          <button className="start" onClick={this.buttonClickHandler}>
            Start
          </button>
        ) : (
          <div
            className="ball"
            style={{
              position: "absolute",
              left: this.state.ballPosition + "px",
              top: "100px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "green"
            }}
          ></div>
        )}
      </div>
    );
  }
}

export default App;
