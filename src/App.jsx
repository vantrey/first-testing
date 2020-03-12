import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter/Counter";
import Set from "./Set/Set";

class App extends React.Component {
  state = {
    counter: 0,
    maxCount: 5,
    minCount: 0,
  }
  inc = () => {
    if (this.state.counter < this.state.maxCount) {
      this.setState({counter: this.state.counter +1})
    }
  }
  reset = () => {
    this.setState({counter: this.state.minCount})
  }
  setCounterValue = (min, max) => {
    this.setState({counter: min, minCount: min, maxCount: max})
  }
  render = () => {
    return (
      <div className={styles.App}>
        <Set setCounterValue={this.setCounterValue}/>
        <Counter inc={this.inc} reset={this.reset} state={this.state}/>
      </div>
    )
  }
}

export default App;
