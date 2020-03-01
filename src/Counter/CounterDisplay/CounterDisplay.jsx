import React from 'react';
import styles from './CounterDisplay.module.css'

class CounterDisplay extends React.Component {

  render = () => {
    let countLim =
      this.props.state.counter === this.props.state.maxCount ? styles.limit : styles.usual
    return (
      <div className={styles.counterDisplay}>
        <span className={countLim}>{this.props.state.counter}</span>
      </div>
    )
  }
}

export default CounterDisplay;







