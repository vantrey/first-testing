import React from 'react';
import styles from './OutputButtonBlock.module.css'
import Button from "../../commonComponents/Button/Button";

class OutputButtonBlock extends React.Component {
  render = () => {
    const {status, counter, minCountValue, maxCountValue} = this.props
    const disBtn = status !== 'count'
    const buttons = [
      {
        name: 'INC',
        f: this.props.increment,
        disBtn: disBtn || counter === maxCountValue,
      },
      {
        name: 'RESET',
        f: this.props.reset,
        disBtn: disBtn || counter === minCountValue,
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


export default OutputButtonBlock







