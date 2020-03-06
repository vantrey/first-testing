import React from 'react';
import styles from './ButtonBlock.module.css'
import Button from "../../Counter/ButtonBlock/Button/Button";



class ButtonBlock extends React.Component {
  render = () => {
/*    let buttons = [
      {name: 'set', f: this.props.inc, disBtn: this.props.state.counter === this.props.state.maxCount,},
    ]*/
/*    let buttonEls = buttons.map((btn, index) => {
      return (
        <Button key={index}
                btnName={btn.name}
                f={btn.f}
                disBtn={btn.disBtn}
        />
      )
    })*/
    return (
      <div className={styles.buttonBlock}>
        <Button
                btnName={`set`}
                f={this.props.inc}
                disBtn={this.props.state.counter === this.props.state.maxCount}
        />
      </div>
    )
  }
}

export default ButtonBlock;







