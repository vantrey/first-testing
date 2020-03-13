import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter/Counter";
import Set from "./Set/Set";

class App extends React.Component {
  state = {
    counter: 0,
    maxCountValue: 5,
    minCountValue: 0,
    status: 'setting', // 'error', 'count'
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
  setCounter = (min, max) => {
    this.setState({counter: min, minCountValue: min, maxCountValue: max})
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
