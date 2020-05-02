
export const repository = {
  getState() {
    const stateAsString = localStorage.getItem('state')
    if (stateAsString !== null) {
      return JSON.parse(stateAsString)
    } else return null
  },
  saveState(state) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem('state', stateAsString)
  }
}


