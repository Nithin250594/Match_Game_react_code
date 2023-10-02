import './index.css'

const NavBar = props => {
  const {score, timer} = props
  return (
    <div className="navbar-bg">
      <ul className="nav-items-list">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </li>
        <li>
          <div className="score-time-box">
            <p className="score-text">
              Score:<span className="score-count">{score}</span>
            </p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-image"
            />
            <p className="score-count">{timer} sec</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
