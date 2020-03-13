import React from 'react';
import styles from './ButtonBlock.module.css'
import Button from "../../Button/Button";

class ButtonBlock extends React.Component {
  render = () => {
    const disBtn = this.props.state.status !== 'count'

    const buttons = [
      {
        name: 'inc',
        f: this.props.inc,
        disBtn: disBtn || this.props.state.counter === this.props.state.maxCountValue,
      },
      {
        name: 'reset',
        f: this.props.reset,
        disBtn: disBtn || this.props.state.counter === this.props.state.minCountValue,
      },
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







