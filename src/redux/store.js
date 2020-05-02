import {combineReducers, createStore} from "redux"
import {outputReducer} from "./outputReducer"
import {setterReducer} from "./setterReducer"
import {repository} from "../repository"

const reducers = combineReducers({
  output: outputReducer,
  setter: setterReducer,
})

const restoredState = () => {
  const state = repository.getState()
  if (state) {
    return state
  } else return {reducers}
}

const store = createStore(reducers, restoredState())

export const saveStateToLocalStorage = () => {
  repository.saveState(store.getState())
}

export default store