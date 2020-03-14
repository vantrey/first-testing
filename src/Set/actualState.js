export const saveState = (state) => {
  const stateAsString = JSON.stringify(state)
  localStorage.setItem('counter-state', stateAsString)
}

export const restoreState = (setStateFromSave) => {
  let state = {
    minValue: 0,
    maxValue: 5,
    isError: false,
  }
  const stateAsString = localStorage.getItem('counter-state')
  if (stateAsString !== null) {
    state = JSON.parse(stateAsString)
  }
  setStateFromSave(state)
}

