import React from 'react'
import Input from "./Input/Input"
import styles from "./Limits.module.css"

class Limits extends React.Component {

  onValueChange = (e) => {
    this.props.setLimits(e.currentTarget.name, Number(e.currentTarget.value))
  }
  render = () => {
    const Inputs = [
      {
        name: 'max',
        type: 'number',
        currentValue: this.props.maxValue,
        isError: this.props.status === 'error',
        onValueChange: this.onValueChange,
      },
      {
        name: 'min',
        type: 'number',
        currentValue: this.props.minValue,
        isError: this.props.status === 'error',
        onValueChange: this.onValueChange,
      },
    ]

    const InputsEls = Inputs.map((input, i) => {
      return (
        <Input
          key={i}
          name={input.name}
          type={input.type}
          isError={input.isError}
          currentValue={input.currentValue}
          onValueChange={input.onValueChange}
        />
      )
    })
    return (
      <div className={styles.Limits}>
        {InputsEls}
      </div>
    )
  }
}

export default Limits
