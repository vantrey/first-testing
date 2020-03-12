import React from 'react'
import Input from "./Input/Input"
import styles from "./Limits.module.css"

class Limits extends React.Component {
  render = () => {
    const Inputs = [
      {
        name: 'max',
        type: 'number',
        currentValue: this.props.state.maxValue,
        isError: this.props.state.isError,
        onValueChange: this.props.onValueChange,
      },
      {
        name: 'min',
        type: 'number',
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