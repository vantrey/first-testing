import React from 'react';
import styles from './Counter.module.css'
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import ButtonBlock from "./ButtonBlock/ButtonBlock";

class Counter extends React.Component {

  render = () => {
    return (
      <div className={styles.main}>
        <CounterDisplay state={this.props.state}/>
        <ButtonBlock
          state={this.props.state}
          inc={this.props.inc}
          reset={this.props.reset}
        />
      </div>
    )
  }

}

export default Counter;







