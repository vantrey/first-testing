import React from 'react';
import styles from './DisplayButtonBlock.module.css'
import Button from "../../commonComponents/Button/Button";

class DisplayButtonBlock extends React.Component {
  render = () => {
    const disBtn = this.props.state.status !== 'count'
    const buttons = [
      {
        name: 'INC',
        f: this.props.inc,
        disBtn: disBtn || this.props.state.counter === this.props.state.maxCountValue,
      },
      {
        name: 'RESET',
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
      <div className={styles.displayButtonBlock}>
        {buttonEls}
      </div>
    )
  }
}

export default DisplayButtonBlock;







