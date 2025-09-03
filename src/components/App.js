import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,       // Track if game started
      ballPosition: 0       // Track ball's X position
    };
  }

  // Start button click handler
  buttonClickHandler = () => {
    this.setState({ started: true });
  };

  // Keyboard event handler
  handleKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5
      }));
    }
  };

  // Attach keydown listener when component mounts
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Clean up event listener
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
              width: "50px",
              height: "50px",
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
