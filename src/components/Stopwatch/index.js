import {Component} from 'react'
import './index.css'

const initialState = {isTimeRunning: false, timerInSeconds: 0}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onClickStop = () => {
    clearInterval(this.intervalId)
    this.setState({isTimeRunning: false})
  }

  onClickReset = () => {
    clearInterval(this.intervalId)
    this.setState(initialState)
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  onClickStart = () => {
    this.intervalId = setInterval(this.updateTimer, 1000)
    this.setState({isTimeRunning: true})
  }

  getTimer = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)
    const seconds = Math.floor(timerInSeconds % 60)
    const formattedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const formattedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${formattedMinutes}:${formattedSeconds}`
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-container">
          <div className="timer-text-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="icon"
              alt="stopwatch"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="timer">{this.getTimer()}</h1>
          <div className="button-container">
            <button
              className="button start"
              type="button"
              onClick={this.onClickStart}
            >
              Start
            </button>
            <button
              className="button stop"
              type="button"
              onClick={this.onClickStop}
            >
              Stop
            </button>
            <button
              className="button reset"
              type="button"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
