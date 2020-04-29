import {combineReducers, createStore} from "redux"
import {counterReducer} from "./counterReducer"

const reducers = combineReducers({
  counter: counterReducer,
  setter: setterReducer,
})

const store = createStore(reducers)

export default store