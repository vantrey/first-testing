import React from 'react';
import './App.css';
import Main from "./Main/Main";

class App extends React.Component {
  state = {
    counter: 0,
    maxCount: 5,
  };

  inc = () => {
    let UpdCounter = {
      counter: this.state.counter++
    }
    if (this.state.counter <= this.state.maxCount) {
      this.setState({UpdCounter})
    }
  }
  reset = () => {
    let UpdCounter = {
      counter: this.state.counter = 0
    }
    this.setState({UpdCounter})
  }

  disableBtn = () => {
    if (this.state.counter=0) {

    }
  }

  render = () => {
    return (
      <Main inc={this.inc} reset={this.reset} counter={this.state.counter}/>
    )
  }
}


export default App;
