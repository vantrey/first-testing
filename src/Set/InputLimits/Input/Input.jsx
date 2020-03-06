import React from 'react';
import styles from './Input.module.css'

class Input extends React.Component {

  render = () => {
    let classForEl = this.props.isError ? `${styles.input} ${styles.error}` : styles.input
    return (
      <input className={classForEl}
             name={this.props.name}
             type={this.props.type}
             placeholder={this.props.placeholder}
             value={this.props.currentValue}
             onChange={this.props.onValueChange}
      />
    )
  }
}

export default Input
