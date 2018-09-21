'use strict'

import React from 'react'
import { connect } from 'react-redux'


export const Counter = ({counter, increment, decrement}) => (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
)

const mapStateToProps = (state) => ({
    counter: state
})

const mapDispatchToProps = (dispatch) => ({
    decrement: () => {
        dispatch( { type: 'DECREMENT' })
      },

      increment: () => {
       dispatch({ type: 'INCREMENT' })
      }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)