import React from 'react'
import Input from "./Input/Input"
import styles from "./InputLimits.module.css"

class InputLimits extends React.Component {
  state = {
    minValue: '',
    maxValue: '',
    isError: false,
  }
  onValueChange = (e) => {
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
  }
  setValue = (e) => {
 if (!e.currentTarget.value) {
      this.setState({isError: true})
    } else {
      if (e.currentTarget.name === 'min') {
        alert(this.state.minValue)
        this.setState({minValue: ''})
      } else if (e.currentTarget.name === 'max') {
        alert(this.state.maxValue)
        this.setState({maxValue: ''})
      } else {
        this.setState({isError: true})
      }
    }
  }
  onEnterPress = (e) => {
    e.key === 'Enter' && this.setValue(e)
  }
  render = () => {
    const Inputs = [
      {
        name: 'max',
        type: 'number',
        placeholder: 'enter max value',
        currentValue: this.state.maxValue,
        isError: this.state.isError,
        onInputChange: this.onValueChange,
        onEnterPress: this.onEnterPress,
      },
      {
        name: 'min',
        type: 'number',
        placeholder: 'enter min value',
        currentValue: this.state.minValue,
        isError: this.state.isError,
        onInputChange: this.onValueChange,
        onEnterPress: this.onEnterPress,
      },
    ]
    const InputsEls = Inputs.map((input, i) => {
      return (
        <Input
          key={i}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          isError={input.isError}
          currentValue={input.currentValue}
          onInputChange={input.onInputChange}
          onEnterPress={input.onEnterPress}
        />
      )
    })
    return (
      <div className={styles.addTextWrapper}>
        {InputsEls}
      </div>
    )
  }
}

export default InputLimits
