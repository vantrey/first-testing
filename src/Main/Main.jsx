import React from 'react';
import styles from './Main.module.css'
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import ButtonBlock from "./ButtonBlock/ButtonBlock";

class Main extends React.Component {



  render = () => {
    return (
      <div className={styles.main}>
        <CounterDisplay counter={this.props.counter}/>
        <ButtonBlock
          counter={this.props.counter}
          inc={this.props.inc}
          reset={this.props.reset}/>
      </div>
    )
  }

}

export default Main;







