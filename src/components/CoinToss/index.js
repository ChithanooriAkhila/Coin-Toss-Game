// Write your code here
import {Component} from 'react'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {toss: 0, heads: 0, tails: 0, total: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState(prev => ({
        toss: tossResult,
        heads: prev.heads + 1,
        total: prev.total + 1,
      }))
    } else {
      this.setState(prev => ({
        toss: tossResult,
        tails: prev.tails + 1,
        total: prev.total + 1,
      }))
    }
  }

  render() {
    const {toss, heads, tails, total} = this.state

    return (
      <div>
        <div>
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <div>
            <img
              src={toss === 0 ? HEADS_IMG_URL : TAILS_IMG_URL}
              alt="toss result"
            />
          </div>
          <div>
            <button type="button" onClick={this.tossCoin}>
              Toss Coin
            </button>
          </div>
          <p>Total:{total}</p>
          <p>Heads:{heads}</p>
          <p>Tails:{tails}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
