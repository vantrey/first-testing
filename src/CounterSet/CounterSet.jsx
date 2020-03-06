import React from 'react';
import styles from './CounterSet.module.css'
import CounterSetDisplay from "./CounterSetDisplay/CounterSetDisplay";
import ButtonBlock from "./ButtonBlock/ButtonBlock";

class CounterSet extends React.Component {

  render = () => {

    return (
      <div className={styles.main}>
        <CounterSetDisplay state={this.props.state}/>
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







