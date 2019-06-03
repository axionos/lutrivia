import React from 'react';

class GameInfo extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <div className="game_info">
        <h1>{this.props.name}</h1>
        <button>New Game</button>
        <h3>{this.props.score}</h3>
      </div>
    )
  }
}

export default GameInfo;
