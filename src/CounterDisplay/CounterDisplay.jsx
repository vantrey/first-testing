import React from 'react';
import styles from './CounterDisplay.module.css'
import Display from "./Display/Display";
import ButtonBlock from "./ButtonBlock/ButtonBlock";

class CounterDisplay extends React.Component {

  render = () => {
    return (
      <div className={styles.counterDisplay}>
        <Display state={this.props.state}/>
        <ButtonBlock
          state={this.props.state}
          inc={this.props.inc}
          reset={this.props.reset}
        />
      </div>
    )
  }

}

export default CounterDisplay;







