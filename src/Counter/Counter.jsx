import React from 'react';
import styles from './Counter.module.css';
import CounterDisplay from "./Output/Output";
import CounterSetter from "./Setter/Setter";


class Counter extends React.Component {
/*  state = {
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
  setCounterState = (state) => {
    this.setState(state)
  }*/
  render = () => {
    return (
      <div className={styles.counter}>
        <CounterSetter/>
        <CounterDisplay/>
      </div>
    )
  }
}

export default Counter
