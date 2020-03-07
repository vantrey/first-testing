import React from 'react'
import styles from './Input.module.css'

class Input extends React.Component {

  render = () => {
    let classForEl = this.props.isError ? `${styles.input} ${styles.error}` : styles.input
    return (
      <label className={styles.input}> {this.props.name}
      <input className={classForEl}
             name={this.props.name}
             type={this.props.type}
             placeholder={this.props.placeholder}
             value={this.props.currentValue}
             onChange={this.props.onValueChange}
      />
      </label>
    )
  }
}

export default Input
