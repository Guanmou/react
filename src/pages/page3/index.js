import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

export default class Counter  extends React.Component{
   

    render(){
        const { value, onIncreaseClick } = this.props
        return (
          <div>
            <span>{value}</span>
            <button onClick={onIncreaseClick}>Increase</button>
          </div>)
    }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
  }
  // Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

function mapStateToProps(state) {
    return {
      value: state.count
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      onIncreaseClick: () => dispatch(increaseAction)
    }
  }

  const App = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter )