import React from 'react';
import styles from './ButtonBlock.module.css'
import Button from "../../Button/Button";


class ButtonBlock extends React.Component {
  render = () => {
    return (
      <div className={styles.buttonBlock}>
        <Button
          btnName={`set`}
          f={this.props.setValue}
        />
      </div>
    )
  }
}

export default ButtonBlock;







