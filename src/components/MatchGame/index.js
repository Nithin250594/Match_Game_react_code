import {Component} from 'react'

import NavBar from '../NavBar'

import TabsList from '../TabsList'

import ThumbnailItems from '../ThumbnailItems'

import './index.css'

class MatchGame extends Component {
  state = {
    tabCategory: 'FRUIT',
    imageMatched: true,
    index: 0,
    timer: 60,
    score: 0,
  }

  componentDidMount = () => {
    this.timerIntervalId = setInterval(this.timerDecrement, 1000)
  }

  componentWillUnmount = () => {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => {
    clearInterval(this.timerIntervalId)
  }

  timerDecrement = () => {
    const {timer} = this.state
    if (timer === 0) {
      this.clearTimerInterval()
    } else {
      this.setState(prev => ({timer: prev.timer - 1}))
    }
  }

  clickOnFruit = tabId => {
    this.setState({tabCategory: tabId})
  }

  thumbnailClicked = id => {
    const {index} = this.state

    const {imagesList} = this.props

    if (imagesList[index].id === id) {
      this.setState(prev => ({
        index: Math.floor(Math.random() * imagesList.length),
        imageMatched: true,
        score: prev.score + 1,
      }))
    } else {
      this.clearTimerInterval()
      this.setState({imageMatched: false})
    }
  }

  playAgain = () => {
    this.setState({
      score: 0,
      timer: 60,
      imageMatched: true,
      index: 0,
      tabCategory: 'FRUIT',
    })
    this.componentDidMount()
  }

  render() {
    const {tabCategory, index, imageMatched, score, timer} = this.state

    const {tabsList, imagesList} = this.props

    const filteredList = imagesList.filter(
      eachObj => tabCategory === eachObj.category,
    )
    const randomImage = imagesList[index].imageUrl
    return (
      <div className="match-game-bg">
        <NavBar score={score} timer={timer} />
        {imageMatched === true && timer > 0 ? (
          <>
            <div className="random-image-box">
              <img src={randomImage} alt="match" className="image-url-size" />
            </div>

            <ul className="button-list">
              {tabsList.map(eachTab => (
                <TabsList
                  key={eachTab.tabId}
                  tabDetails={eachTab}
                  clickOnFruit={this.clickOnFruit}
                  tabCategory={tabCategory}
                />
              ))}
            </ul>
            <ul className="thumbnailsList">
              {filteredList.map(eachObj => (
                <ThumbnailItems
                  key={eachObj.id}
                  thumbnailsDetails={eachObj}
                  thumbnailClicked={this.thumbnailClicked}
                />
              ))}
            </ul>
          </>
        ) : (
          <div className="result-container">
            <div className="score-card-bg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                alt="trophy"
                className="trophy-image"
              />
              <p className="score-title">Your Score</p>
              <p className="score-value">{score}</p>

              <button
                type="button"
                className="play-again-btn"
                onClick={this.playAgain}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                  className="reset-image"
                />
                PLAY AGAIN
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
