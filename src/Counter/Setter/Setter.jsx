import React from 'react';
import styles from './Setter.module.css'
import SetterButtonBlock from "./SetterButtonBlock/SetterButtonBlock";
import Display from "../commonComponents/Display/Display";
import {restoreState, saveState} from "../../actualState"
import {connect} from "react-redux"
import {setLimits, setStatus} from "../../redux/setterReducer"
import {setCounter} from "../../redux/outputReducer"

class Setter extends React.Component {

  /*  state = {
      minValue: 0,
      maxValue: 5,
      isError: false,
    }*/

  componentDidMount() {
    /*restoreState(this.setRestoredState)*/
  }

 /* setRestoredState = (state) => {
    this.setState(state, () => {
      this.setCounter()
    })
  }*/

/*  setLimits = (state) => {
    this.setState(state, this.isErrorCheck)
  }*/
  setCounter = () => {
    this.props.setCounter({
      minCountValue: this.props.minValue,
      maxCountValue: this.props.maxValue,
      counter: this.props.minValue,
    })
    this.props.setStatus('count')
  }
/*  isErrorCheck = () => {
    if (this.props.minValue < 0 || this.props.maxValue <= this.props.minValue) {
      this.props.setStatus('error')
    } else {
      this.props.setStatus('setting')
    }
  }*/

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
  minValue: state.setter.minValue,
  maxValue: state.setter.maxValue,
  status: state.setter.status,
})

export default connect(mapStateToProps, {setLimits, setStatus, setCounter})(Setter);




