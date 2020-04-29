const SET_STATUS = 'counterReducer/SET_STATUS'
const INCREMENT = 'counterReducer/INCREMENT'
const RESET = 'counterReducer/RESET'

const initialState = {
  minCountValue: 0,
  maxCountValue: 5,
  counter: 0,
  status: 'count'//'count', 'error'
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {...state, status: action.status}

    case INCREMENT:
      if (state.counter < state.maxCountValue) {
        return {...state, counter:  state.counter + 1}
      } else return state

    case RESET:
      return {...state, counter: state.minCountValue}

    default:
      return state
  }
}

export const setStatus = (status) => ({type: SET_STATUS, status})
export const increment = () => ({type: INCREMENT})
export const reset = () => ({type: RESET})