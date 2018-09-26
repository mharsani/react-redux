'use strict'
import {
    ADD_COUNTER ,
    REMOVE_COUNTER,
    INCREMENT,
    DECREMENT,
} from './actions'

export const initialState = []

export default (state = [], action) => {
   switch (action.type) {
       case ADD_COUNTER :
       return state.concat(0)

       case REMOVE_COUNTER :
       return state.filter((_, index) => index !== action.index)

       case INCREMENT :
       return state.map((c, index) =>  index === action.index ? c + 1 : c )

       case DECREMENT :
       return state.map((counter, index)=> {
           return index === action.index ? counter - 1 : counter
       })
   }
   return state
}