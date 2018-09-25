'use strict'

import React from 'react'


export const Counter = ({counter, increment, decrement, removeCounter}) => (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <div style={{display: 'flex', justifyContent: 'space-around' }}>
           <button onClick={removeCounter}>Remover</button>     
        </div>
    </div>
)


export default Counter