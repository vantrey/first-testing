const INCREMENT = 'outputReducer/INCREMENT'
const RESET = 'outputReducer/RESET'
const SET_COUNTER = 'outputReducer/SET_COUNTER'

const initialState = {
  minOutputValue: 0,
  maxOutputValue: 5,
  counter: 0,
}

export const outputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      if (state.counter < state.maxOutputValue) {
        return {...state, counter:  state.counter + 1}
      } else return state

    case RESET:
      return {...state, counter: state.minOutputValue}

    case SET_COUNTER:
      return {...state, ...action.newValues}
    default:
      return state
  }
}

export const increment = () => ({type: INCREMENT})
export const reset = () => ({type: RESET})
export const setCounter = (newValues) => ({type: SET_COUNTER, newValues})