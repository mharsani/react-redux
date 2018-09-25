'use strict'

import React from 'react'
import Counter from '../Counter/'
import { connect } from 'react-redux'
import {ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT} from 'reducers/counters'

const Counters = ({counters, addCounter, removeCounter, decrement, increment}) => (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-around' }}>
            {counters.map((counter, index) => (
                <Counter key={index} counter={counter} removeCounter={removeCounter(index)} decrement={decrement(index)} increment={increment(index)}/>
            ))}
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around' }}>
           <button onClick={addCounter}>Adicionar Contador</button>     
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    counters: state
})

const mapDispatchToProps = (dispatch) => ({
    addCounter: () => dispatch({type: ADD_COUNTER}),
    removeCounter: (index) => () => dispatch({type: REMOVE_COUNTER, index}),
    increment: (index) => () => dispatch({type: INCREMENT, index}),
    decrement: (index) => () =>  dispatch({type: DECREMENT, index})
})

export default connect(mapStateToProps, mapDispatchToProps)(Counters)