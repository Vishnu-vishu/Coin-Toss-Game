import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = "https://assets.ccbp.in/frontend/react-js/heads-img.png"

const TAILS_IMG_URL = "https://assets.ccbp.in/frontend/react-js/tails-img.png"

class CoinToss extends Component {
    state = {
        tossResultImage: HEADS_IMG_URL,
        headsCount: 0,
        tailsCount: 0,
    }

    onTossCoin = () => {
        const {headsCount, tailsCount} = this.state
        const toss = Math.floor(Math.random() * 2)
        let tossImage = ''
        let latestHeadCount = headsCount
        let latestTailCount = tailsCount

        if (toss === 0) {
            tossImage = HEADS_IMG_URL
            latestHeadCount += 1
        } else {
            tossImage = TAILS_IMG_URL
            latestTailCount += 1
        }
        this.setState({
            tossResultImage: tossImage,
            headsCount: latestHeadCount,
            tailsCount: latestTailCount,
        })
    }

    render(){
        const {tossResultImage, headsCount, tailsCount} = this.state
        const totalCount = headsCount + tailsCount

        return (
            <div className="bg-container">
            <div className="card-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="description">Heads (or) Tails</p>
            <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
            />
            <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
            </button>
            <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
            </div>
            </div>
            </div>
        )
    }
}
export default CoinToss