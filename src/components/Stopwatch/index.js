// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timerInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  renderInMinutes = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderInSeconds = () => {
    const {timerInSeconds} = this.state
    const seconds = Math.floor(timerInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  onStartTimer = () => {
    this.timerID = setInterval(this.startClock, 1000)
  }

  startClock = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  onStopTimer = () => {
    clearInterval(this.timerID)
  }

  onResetTimer = () => {
    this.setState({timerInSeconds: 0})
    clearInterval(this.timerID)
  }

  render() {
    const displayText = `${this.renderInMinutes()}:${this.renderInSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer" data-testid="timer">
              {displayText}
            </h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
