import React from 'react';
import styles from './SetDisplay.module.css'
import Limits from "./Limits/Limits";

class SetDisplay extends React.Component {

  render = () => {
    return (
      <div className={styles.setDisplay}>
        <Limits state={this.props.state} onValueChange={this.props.onValueChange}/>
      </div>
    )
  }
}

export default SetDisplay;







