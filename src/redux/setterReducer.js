
const SET_LIMITS = 'setterReducer/SET_LIMITS'
const SET_STATUS = 'setterReducer/SET_STATUS'

const initialState = {
  minSetterValue: 0,
  maxSetterValue: 5,
  status: 'setting'//'count', 'error'
}

export const setterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIMITS:
      if (action.name === 'min') {
        return {
          ...state,
          minSetterValue: action.value,
          status: action.value < state.maxSetterValue && action.value >= 0 ?
            'setting' : 'error'
        }
      } else if (action.name === 'max') {
        return {
          ...state,
          maxSetterValue: action.value,
          status: action.value > state.minSetterValue && state.minSetterValue >= 0 ?
            'setting' : 'error'
        }
      } else return {...state, isError: true}

    case SET_STATUS:
      return {...state, status: action.status}

    default:
      return state
  }
}

export const setLimits = (name, value) => ({type: SET_LIMITS, name, value})
export const setStatus = (status) => ({type: SET_STATUS, status})