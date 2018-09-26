'use strict'

import React from 'react'
import Counter from '../Counter/'
import { connect } from 'react-redux'
import { addCounter, removeCounter, increment, decrement } from 'reducers/counters/action-creators'

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
    addCounter: () => dispatch(addCounter()),
    removeCounter: (index) => () => dispatch(removeCounter(index)),
    increment: (index) => () => dispatch(increment(index)),
    decrement: (index) => () =>  dispatch(decrement(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counters)