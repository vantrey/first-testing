const SET_STATUS = 'setterReducer/SET_STATUS'
const INCREMENT = 'setterReducer/INCREMENT'
const RESET = 'setterReducer/RESET'

const initialState = {
  minValue: 0,
  maxValue: 5,
  isError: false,
}

export const setterReducer = (state = initialState, action) => {
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