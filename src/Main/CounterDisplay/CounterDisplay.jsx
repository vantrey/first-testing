import React from 'react';
import styles from './CounterDisplay.module.css'

class CounterDisplay extends React.Component {

  render = () => {

    return (
      <div className={styles.counterDisplay}>
        {this.props.counter}
      </div>
    )
  }

}

export default CounterDisplay;







