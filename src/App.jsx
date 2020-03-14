import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter/Counter";
import Set from "./Set/Set";

class App extends React.Component {
  state = {
  }
  setStatus = (status) => {
    this.setState({status: status})
  }
  inc = () => {
    if (this.state.counter < this.state.maxCountValue) {
      this.setState({counter: this.state.counter + 1})
    }
  }
  reset = () => {
    this.setState({counter: this.state.minCountValue})
  }
  setCounter = (state) => {
    this.setState(state)
  }
  render = () => {
    return (
      <div className={styles.App}>
        <Set setStatus={this.setStatus} setCounter={this.setCounter}/>
        <Counter inc={this.inc} reset={this.reset} state={this.state}/>
      </div>
    )
  }
}

export default App;
