import React from 'react';
import styles from './Button.module.css'

class Button extends React.Component {

  onClick = () => {
    this.props.f()
  }
  render = () => {
    return (
      <div>
        <button
          className={styles.button}
          disabled={this.props.disBtn}
          onClick={this.onClick}
        >
          {this.props.btnName}
        </button>
      </div>
    )
  }
}

export default Button;







