import React from 'react';
import styles from './CounterDisplay.module.css'

class CounterDisplay extends React.Component {

  render = () => {
    let classForCount =
      this.props.state.counter === this.props.state.maxCountValue ?
        `${styles.limit} ${styles.usual}` :
        styles.usual
    return (
      <div className={styles.counterDisplay}>
        {
          (this.props.state.status === 'count' &&
            <span className={classForCount}>{this.props.state.counter}</span>) ||
          (this.props.state.status === 'setting' &&
            <span className={styles.setting}> Please, set min and max value and press "SET"</span>) ||
          (this.props.state.status === 'error' &&
            <span className={styles.error}>ERROR! Invalid value</span>)
        }
      </div>
    )
  }
}

export default CounterDisplay;







