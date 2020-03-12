import React from 'react';
import styles from './CounterDisplay.module.css'

class CounterDisplay extends React.Component {

  render = () => {
    let limit =
      this.props.state.counter === this.props.state.maxCount ?
        `${styles.limit} ${styles.usual}` :
        styles.usual
    return (
      <div className={styles.counterDisplay}>
        <span className={limit}>{this.props.state.counter}</span>
      </div>
    )
  }
}

export default CounterDisplay;







