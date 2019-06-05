import React from 'react';

class GameInfo extends React.Component {

  counter = () => {
    if (this.props.questionsAnswered === 5) {
      console.log('waiting to appear...')
      // this.props.resetCounter()
      return <button
        onClick={this.props.startGame}
      >New Game</button>
    }
  }

  render() {

    // console.log('gameinfo props', this.props)



    return (
      <div className="game_info">
        <h1>{this.props.name}</h1>
        {this.counter()}

        {this.props.inProgress ? null : <button
          onClick={this.props.startGame}
        >New Game</button>}


        <h3>Score: {this.props.score}</h3>
      </div>
    )
  }
}

export default GameInfo;
