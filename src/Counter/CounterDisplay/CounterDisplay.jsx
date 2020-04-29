import React from 'react';
import styles from './CounterDisplay.module.css'

import DisplayButtonBlock from "./DisplayButtonBlock/DisplayButtonBlock";
import Display from "../commonComponents/Display/Display"
import {connect} from "react-redux"
import {increment, reset} from "../../redux/counterReducer"

class CounterDisplay extends React.Component {

  render = () => {
    return (
      <div className={styles.counterDisplay}>
        <Display
          maxCountValue={this.props.maxCountValue}
          counter={this.props.counter}
          status={this.props.status}
          isSetter={false}
        />
        <DisplayButtonBlock {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    minCountValue: state.counter.minCountValue,
    maxCountValue: state.counter.maxCountValue,
    counter: state.counter.counter,
    status: state.counter.status
  }
}

export default connect(mapStateToProps, {increment, reset})(CounterDisplay)







