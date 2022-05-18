//returns the default value of 0 and creates a switch 
export default (state = 0, action) => {
  switch (action.type) {
    //if we dispatch to add 1
    case 'INCREMENT':
      return state + 1
    //if we dispatch to subtract 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
