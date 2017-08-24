import { connect } from 'react-redux'
import * as countAction from '../actions/countAction'

import { PureComponent } from 'react'

class AddCount extends PureComponent {
  render () {
    const { addCount, subCount, payload } = this.props
    
    return (
      <div>
        <label>{payload}</label>
        <br />  
        <button onClick={addCount}>+</button>
        <button onClick={subCount}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    payload:state.addCountReducer.payload
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    addCount:() => dispatch(countAction.addCount()), 
    subCount:() => dispatch(countAction.subCount())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCount);