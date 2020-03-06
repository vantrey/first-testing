import React from 'react';
import styles from './CounterSetDisplay.module.css'
import InputLimits from "./InputLimits/InputLimits";

class CounterSetDisplay extends React.Component {

  render = () => {
    return (
      <div className={styles.counterDisplay}>
      <InputLimits/>
      </div>
    )
  }
}

export default CounterSetDisplay;







