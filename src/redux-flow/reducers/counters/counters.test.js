'use strict'

import counters from './index'
import {expect} from 'chai'

it('counters should be a function', () =>{
    expect(counters).to.be.a('function')
})

it('Should add a counter', () => {
   
    const before = []
    const action = {type: 'ADD_COUNTER'}
    const after = [0]
    expect(counters(before, action)).to.be.deep.equal(after)
})

