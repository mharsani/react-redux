'use strict'

import React from 'react'
import Counter from '../Counter/'
import { connect } from 'react-redux'

const Counters = ({counter, increment, decrement}) => (
    <div style={{display: 'flex', justifyContent: 'space-around' }}>
        {[0,0,0].map((param, index) => (
            <Counter key={index} counter={counter} increment={increment} decrement={decrement}/>
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Counters)