import React from 'react';
import styles from './ButtonBlock.module.css'
import Button from "../../Counter/ButtonBlock/Button/Button";


class ButtonBlock extends React.Component {
  render = () => {
    return (
      <div className={styles.buttonBlock}>
        <Button
          btnName={`set`}
          f={this.props.setValue}
          disBtn={this.props.state.counter === this.props.state.maxCount}
        />
      </div>
    )
  }
}

export default ButtonBlock;







