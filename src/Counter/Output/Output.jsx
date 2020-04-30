import React from 'react';
import styles from './Output.module.css'

import OutputButtonBlock from "./OutputButtonBlock/OutputButtonBlock";
import Display from "../commonComponents/Display/Display"
import {connect} from "react-redux"
import {increment, reset} from "../../redux/outputReducer"

class Output extends React.Component {

  render = () => {
    return (
      <div className={styles.counterDisplay}>
        <Display
          maxCountValue={this.props.maxCountValue}
          counter={this.props.counter}
          status={this.props.status}
          isSetter={false}
        />
        <OutputButtonBlock {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    minCountValue: state.output.minCountValue,
    maxCountValue: state.output.maxCountValue,
    counter: state.output.counter,
    status: state.setter.status
  }
}

export default connect(mapStateToProps, {increment, reset})(Output)







