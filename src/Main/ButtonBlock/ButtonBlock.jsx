import React from 'react';
import styles from './ButtonBlock.module.css'
import Button from "./Button/Button";


class ButtonBlock extends React.Component {

  render = () => {

    return (
      <div className={styles.buttonBlock}>
      <Button counter={this.props.counter}
              btnName={'inc'}
              reset={this.props.reset}
              inc={this.props.inc}/>
      {/*<Button reset={this.props.reset} btnName={'reset'}/>*/}
      </div>
    )
  }

}

export default ButtonBlock;







