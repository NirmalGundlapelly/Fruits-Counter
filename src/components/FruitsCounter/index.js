// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onEatingMan = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onEatingBan = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">
            Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div className="imageContainers">
            <div className="cards">
              <div className="firstCards">
                <img
                  className="images"
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                />
                <button
                  onClick={this.onEatingMan}
                  className="btn"
                  type="button"
                >
                  Eat Mango
                </button>
              </div>
              <div className="firstCards">
                <img
                  className="images"
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                />
                <button
                  onClick={this.onEatingBan}
                  className="btn"
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
