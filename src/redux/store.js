import {combineReducers, createStore} from "redux"
import {outputReducer} from "./outputReducer"
import {setterReducer} from "./setterReducer"

const reducers = combineReducers({
  output: outputReducer,
  setter: setterReducer,
})

const store = createStore(reducers)

export default store