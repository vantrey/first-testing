export const saveState = (state) => {
  const stateAsString = JSON.stringify(state)
  localStorage.setItem('counter-state', stateAsString)
}

export const restoreState = (setRestoredState) => {
  const stateAsString = localStorage.getItem('counter-state')
  if (stateAsString !== null) {
    let state = JSON.parse(stateAsString)
    setRestoredState(state)
  }
}