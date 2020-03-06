import React from 'react';
import styles from './CounterSet.module.css'
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import ButtonBlock from "./ButtonBlock/ButtonBlock";

class CounterSet extends React.Component {

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

export default CounterSet;







