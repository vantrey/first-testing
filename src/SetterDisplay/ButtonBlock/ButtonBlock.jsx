import React from 'react';
import styles from './ButtonBlock.module.css'
import Button from "../../Button/Button";

class ButtonBlock extends React.Component {
  render = () => {
    return (
      <div className={styles.buttonBlock}>
        <Button
          disBtn={this.props.isError}
          btnName={`SET`}
          f={this.props.setCounterFromState}
        />
      </div>
    )
  }
}

export default ButtonBlock;







