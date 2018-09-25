'use strict'

import React from 'react'
import Counter from '../Counter/'
import { connect } from 'react-redux'

const Counters = ({counters}) => (
    <div style={{display: 'flex', justifyContent: 'space-around' }}>
        {counters.map((counter, index) => (
            <Counter key={index} counter={counter} increment={increment} decrement={decrement}/>
        ))}
    </div>
)

const mapStateToProps = (state) => ({
    counters: state
})

export default connect(mapStateToProps)(Counters)