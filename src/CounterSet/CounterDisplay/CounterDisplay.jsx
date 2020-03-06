import React from 'react';
import styles from './CounterDisplay.module.css'
import InputLimits from "./InputLimits/InputLimits";

class CounterDisplay extends React.Component {

  render = () => {
    return (
      <div className={styles.counterDisplay}>
      <InputLimits/>
      </div>
    )
  }
}

export default CounterDisplay;







