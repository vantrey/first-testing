import React from 'react';
import styles from './CounterSetter.module.css'
import SetterButtonBlock from "./SetterButtonBlock/SetterButtonBlock";
import Display from "../commonComponents/Display/Display";
import {restoreState, saveState} from "./actualState"

class CounterSetter extends React.Component {

  state = {
    minValue: 0,
    maxValue: 5,
    isError: false,
  }

  componentDidMount() {
    restoreState(this.setRestoredState)
  }

  setRestoredState = (state) => {
    this.setState(state, () => {
      this.setCounterFromState()
    })
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
  setCounterFromState = () => {
    this.props.setCounter({
      minCountValue: this.state.minValue,
      maxCountValue: this.state.maxValue,
      counter: this.state.minValue,
      status: 'count' // setting, error
    })
    saveState(this.state)
  }
  isErrorCheck = () => {
    if (this.state.minValue < 0 || this.state.maxValue <= this.state.minValue) {
      this.setState({isError: true})
      this.props.setStatus('error')
    } else {
      this.setState({isError: false})
      this.props.setStatus('setting')
    }
  }

  render = () => {
    return (
      <div className={styles.counterSetter}>
        <Display state={this.state} onValueChange={this.onValueChange} isSetter={true}/>
        <SetterButtonBlock
          isError={this.state.isError}
          setCounterFromState={this.setCounterFromState}
        />
      </div>
    )
  }
}

export default CounterSetter;




