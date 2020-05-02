import React from 'react';
import styles from './Counter.module.css';
import CounterDisplay from "./Output/Output";
import CounterSetter from "./Setter/Setter";


class Counter extends React.Component {

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
