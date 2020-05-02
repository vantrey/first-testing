import React from 'react';
import styles from './Display.module.css'
import Limits from "./Limits/Limits";

class Display extends React.Component {

  render = () => {
    let classForCount =
      this.props.counter === this.props.maxOutputValue
        ? `${styles.limit} ${styles.usual}`
        : styles.usual
    return (
      <div className={`${styles.display}`}>
        {
          this.props.isSetter
            ?
            <Limits {...this.props} />
            :
            (this.props.status === 'count' &&
              <span className={classForCount}>{this.props.counter}</span>) ||
            (this.props.status === 'setting' &&
              <span className={styles.setting}> Please, set min and max value and press "SET"</span>) ||
            (this.props.status === 'error' &&
              <span className={styles.error}>ERROR! Invalid value</span>)
        }
      </div>
    )
  }
}

export default Display;







