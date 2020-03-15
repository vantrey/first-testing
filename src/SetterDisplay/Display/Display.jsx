import React from 'react';
import styles from './Display.module.css'
import Limits from "./Limits/Limits";

class Display extends React.Component {

  render = () => {
    return (
      <div className={styles.display}>
        <Limits state={this.props.state} onValueChange={this.props.onValueChange}/>
      </div>
    )
  }
}

export default Display;







