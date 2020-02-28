import React from 'react';
import styles from './Button.module.css'


class Button extends React.Component {
  disabled = false
  btnDisable = () => {
    if (this.props.counter > 4) {
      alert()
      this.disabled = true
    }
  }

  onIncClick = () => {
    this.props.inc()
  }
  onResetClick = () => {
    this.props.reset()
  };
  render = () => {
    return (
      <div className={styles.button}>
        <button disabled={this.disabled} onClick={this.onResetClick}>{this.props.btnName}</button>
        <button disabled={false} onClick={this.onIncClick}>{this.props.btnName}</button>
      </div>
    )
  }

}

export default Button;







