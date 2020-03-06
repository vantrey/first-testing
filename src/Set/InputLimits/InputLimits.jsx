import React from 'react'
import Input from "./Input/Input"
import styles from "./InputLimits.module.css"

class InputLimits extends React.Component {
/*  state = {
    minValue: '',
    maxValue: '',
    isError: false,
  }*/
  /*onValueChange = (e) => {
    if (e.currentTarget.name === 'min') {
      this.setState({
        minValue: e.currentTarget.value,
        isError: false,
      })
    } else if (e.currentTarget.name === 'max') {
      this.setState({
        maxValue: e.currentTarget.value,
        isError: false,
      })
    } else {
      this.setState({
        isMinError: true,
      })
    }
  }*/
  /*setValue = (e) => {
 if (!e.currentTarget.value) {
      this.setState({isError: true})
    } else {
      if (e.currentTarget.name === 'min') {
        this.props.setMinValue(this.state.minValue)
        this.setState({minValue: ''})
      } else if (e.currentTarget.name === 'max') {
        alert(this.state.maxValue)
        this.setState({maxValue: ''})
      } else {
        this.setState({isError: true})
      }
    }
  }*/
  render = () => {
    const Inputs = [
      {
        name: 'max',
        type: 'number',
        placeholder: 'enter max value',
        currentValue: this.props.state.maxValue,
        isError: this.props.state.isError,
        onValueChange: this.props.onValueChange,
      },
      {
        name: 'min',
        type: 'number',
        placeholder: 'enter min value',
        currentValue: this.props.state.minValue,
        isError: this.props.state.isError,
        onValueChange: this.props.onValueChange,
      },
    ];
    const InputsEls = Inputs.map((input, i) => {
      return (
        <Input
          key={i}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          isError={input.isError}
          currentValue={input.currentValue}
          onValueChange={input.onValueChange}
        />
      )
    })
    return (
      <div className={styles.InputLimits}>
        {InputsEls}
      </div>
    )
  }
}

export default InputLimits
