import React from 'react';
import styles from './SetterButtonBlock.module.css'
import Button from "../../commonComponents/Button/Button";

class SetterButtonBlock extends React.Component {
  render = () => {
    return (
      <div className={styles.setterButtonBlock}>
        <Button
          disBtn={this.props.status === 'error'}
          btnName={`SET`}
          f={this.props.setCounter}
        />
      </div>
    )
  }
}

export default SetterButtonBlock;







