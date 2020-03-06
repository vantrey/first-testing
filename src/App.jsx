import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter/Counter";
import CounterSet from "./CounterSet/CounterSet";

class App extends React.Component {
  state = {
    counter: 0,
    maxCount: 5,
    minCount: 0,
  };
  inc = () => {
      if (this.state.counter < this.state.maxCount) {
      this.setState({counter: this.state.counter +1})
    }
  }
  reset = () => {
    this.setState({counter: 0})
  }
  render = () => {
    return (
      <div className={styles.App}>
      <CounterSet inc={this.inc} reset={this.reset} state={this.state}/>
      <Counter inc={this.inc} reset={this.reset} state={this.state}/>
      </div>
    )
  }
}

export default App;
