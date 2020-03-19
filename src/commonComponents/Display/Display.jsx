import React from 'react';
import styles from './Display.module.css'
import Limits from "./Limits/Limits";

class Display extends React.Component {

  render = () => {
    let classForCount =
      this.props.state.counter === this.props.state.maxCountValue ?
        `${styles.limit} ${styles.usual}` :
        styles.usual
    return (
      <div className={`${styles.display}`}>
        {
          this.props.isSetter
            ?
            <Limits state={this.props.state} setLimits={this.props.setLimits}/>
            :
            (this.props.state.status === 'count' &&
              <span className={classForCount}>{this.props.state.counter}</span>) ||
            (this.props.state.status === 'setting' &&
              <span className={styles.setting}> Please, set min and max value and press "SET"</span>) ||
            (this.props.state.status === 'error' &&
              <span className={styles.error}>ERROR! Invalid value</span>)
        }
      </div>


    )
  }
}

export default Display;







