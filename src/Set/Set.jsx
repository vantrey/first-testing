import React from 'react';
import styles from './Set.module.css'
import ButtonBlock from "./ButtonBlock/ButtonBlock";
import Limits from "./SetDisplay/Limits/Limits";
import SetDisplay from "./SetDisplay/SetDisplay";

class Set extends React.Component {

  state = {
    minValue: 0,
    maxValue: 5,
    isError: false,
  }
  onValueChange = (e) => {
    if (e.currentTarget.name === 'min') {
      this.setState({
        minValue: Number(e.currentTarget.value),
        isError: false,
      })
    } else if (e.currentTarget.name === 'max') {
      this.setState({
        maxValue: Number(e.currentTarget.value),
        isError: false,
      })
    } else {
      this.setState({
        isError: true,
      })
    }
  }
  setValue = () => {
    this.props.setCounterValue(this.state.minValue, this.state.maxValue)
  }

  render = () => {
    return (
      <div className={styles.set}>
        <SetDisplay state={this.state} onValueChange={this.onValueChange}/>
        <ButtonBlock
          setValue={this.setValue}
        />
      </div>
    )
  }
}

export default Set;







