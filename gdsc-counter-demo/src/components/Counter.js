import React, { Component } from 'react' 
import PropTypes from 'prop-types' 

//Creates a counter class
class Counter extends Component {

  //Counter constructor
  constructor(props) {
    super(props);

    //Creates a bound function which has the same body as the original function
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  //Function to increment on a conditional
  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  //Function to increment based on a time
  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  //Displays the UI
  render() {
    //three values as the Counter properties
    const { value, onIncrement, onDecrement } = this.props
    return (
      //HTML layout
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

//Makes sure data is valid
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

//exports the Counter class
export default Counter
