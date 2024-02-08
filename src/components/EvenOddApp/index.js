import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {randomNumber: 0}

  onIncrement = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    const text = randomNumber % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {randomNumber}</h1>
          <p className="count-text">Count is {text}</p>
          <button type="button" onClick={this.onIncrement} className="button">
            Increment
          </button>
          <p className="description">
            *Increase by Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
