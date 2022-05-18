import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

//Creates a store to hold and change values
const store = createStore(counter)
//HTML has a built-in div element called root
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  //Renders the values for the Counter class
  <Counter
    //value is the current state of the store
    value={store.getState()}
    //what happens when we click on an increment function? Decrement?
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  //allows entryway to webpage
  rootEl
)

//Call the render function
render()
//Allows store to change based off of user input.
store.subscribe(render)
