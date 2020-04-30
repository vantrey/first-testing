const SET_LIMITS = 'setterReducer/SET_LIMITS'
const SET_STATUS = 'setterReducer/SET_STATUS'

const initialState = {
  minValue: 0,
  maxValue: 5,
  isError: false,
  status: 'setting'//'count', 'error'
}

export const setterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIMITS:
      if (action.name === 'min') {
        return {
          ...state,
          minValue: action.value,
          status: action.value < state.maxValue && action.value >= 0 ?
            'setting' : 'error'
        }
      } else if (action.name === 'max') {
        return {
          ...state,
          maxValue: action.value,
          status: action.value > state.minValue && state.minValue >= 0 ?
            'setting' : 'error'
        }
      } else return {...state, isError: true}
    /*if (action.name === 'min' && action.value < state.maxValue && action.value >= 0) {
      return {...state, minValue: action.value}
    } else if (action.name === 'max' && action.value > state.minValue) {
      return {...state, maxValue: action.value}
    } else return {...state, isError: true}*/
    case SET_STATUS:
      return {...state, status: action.status}

    default:
      return state
  }
}

export const setLimits = (name, value) => ({type: SET_LIMITS, name, value})
export const setStatus = (status) => ({type: SET_STATUS, status})