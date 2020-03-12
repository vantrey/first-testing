import React from 'react';
import styles from './Set.module.css'
import ButtonBlock from "./ButtonBlock/ButtonBlock";
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
      }, this.isErrorCheck)
    } else if (e.currentTarget.name === 'max') {
      this.setState({
        maxValue: Number(e.currentTarget.value),
      }, this.isErrorCheck)

    } else {
      this.setState({
        isError: true,
      })
    }
  }
  setValue = () => {
    this.props.setCounterValue(this.state.minValue, this.state.maxValue)
  }
  isErrorCheck = () => {
    if (this.state.minValue < 0 || this.state.maxValue <= this.state.minValue) {
      this.setState({isError: true})
    } else {
      this.setState({isError: false})
    }
  }

  render = () => {
    return (
      <div className={styles.set}>
        <SetDisplay state={this.state} onValueChange={this.onValueChange}/>
        <ButtonBlock
          isError={this.state.isError}
          setValue={this.setValue}
        />
        {this.props.Counter}
      </div>
    )
  }
}

export default Set;




