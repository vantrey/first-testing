import React from 'react';
import styles from './CounterDisplay.module.css'

import DisplayButtonBlock from "./DisplayButtonBlock/DisplayButtonBlock";
import Display from "../commonComponents/Display/Display"

class CounterDisplay extends React.Component {

  render = () => {
    return (
      <div className={styles.counterDisplay}>
        <Display state={this.props.state} isSetter={false}/>
        <DisplayButtonBlock
          state={this.props.state}
          inc={this.props.inc}
          reset={this.props.reset}
        />
      </div>
    )
  }

}

export default CounterDisplay;







