import React from 'react';
import styles from './Setter.module.css'
import SetterButtonBlock from "./SetterButtonBlock/SetterButtonBlock";
import Display from "../commonComponents/Display/Display";
import {connect} from "react-redux"
import {setLimits, setStatus} from "../../redux/setterReducer"
import {setCounter} from "../../redux/outputReducer"
import {saveStateToLocalStorage} from "../../redux/store"

class Setter extends React.Component {

  setCounter = () => {
    const {minSetterValue, maxSetterValue} = this.props
    this.props.setCounter({
      minOutputValue: minSetterValue,
      maxOutputValue: maxSetterValue,
      counter: minSetterValue
    })
    this.props.setStatus('count')
    saveStateToLocalStorage()
  }

  render = () => {
    return (
      <div className={styles.counterSetter}>
        <Display {...this.props} isSetter={true}/>
        <SetterButtonBlock
          status={this.props.status}
          setCounter={this.setCounter}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  minSetterValue: state.setter.minSetterValue,
  maxSetterValue: state.setter.maxSetterValue,
  status: state.setter.status,
})

export default connect(
  mapStateToProps, {setLimits, setStatus, setCounter}
)(Setter);




