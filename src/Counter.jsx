import React from 'react';
import styles from './Counter.module.css';
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import SetterDisplay from "./SetterDisplay/SetterDisplay";

class Counter extends React.Component {
  state = {
    minCountValue: 0,
    maxCountValue: 5,
    counter: this.minCountValue,
    status: 'setting'//'count', 'error'
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
      <div className={styles.counter}>
        <SetterDisplay setStatus={this.setStatus} setCounter={this.setCounter}/>
        <CounterDisplay inc={this.inc} reset={this.reset} state={this.state}/>
      </div>
    )
  }
}

export default Counter;
