import React from 'react';
import styles from './ButtonBlock.module.css'
import Button from "../../Button/Button";

class ButtonBlock extends React.Component {
  render = () => {
    let buttons = [
      {name: 'inc', f: this.props.inc, disBtn: this.props.state.counter === this.props.state.maxCount,},
      {name: 'reset', f: this.props.reset, disBtn: this.props.state.counter === this.props.state.minCount,},
    ]
    let buttonEls = buttons.map((btn, index) => {
      return (
        <Button key={index}
                btnName={btn.name}
                f={btn.f}
                disBtn={btn.disBtn}
        />
      )
    })
    return (
      <div className={styles.buttonBlock}>
        {buttonEls}
      </div>
    )
  }
}

export default ButtonBlock;







