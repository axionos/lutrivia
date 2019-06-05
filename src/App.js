import React from 'react';
import data from './data.js';
import GameInfo from './GameInfo.js';
import QuestionsContainer from './QuestionsContainer.js';

class App extends React.Component{
  // 1. set the "shared state"
  state={
    gameOn: false,
    currentScore: 0,
    questionsAnswered: 0
  }

  // 4. switch the game status to "true"
  startGame = (event) => {
    this.setState({
      gameOn: !this.state.gameOn
    })
  }

  updateScore = (event) => {
    this.setState({
      currentScore: this.state.currentScore + 1
    })
  }

  questionCounter = event => {
    this.setState({
      questionsAnswered: this.state.questionsAnswered + 1
    })

    if (this.state.questionsAnswered === 5){
      this.setState({
        questionsAnswered: 1
      })
    }
  }

  resetCounter = () => {
    this.setState({
      questionsAnswered: 0
    })
  }

  render(){
    console.log('App State', this.state)
    return (
      <div className="App">
      <GameInfo
        name={data.gameInfo.name}
        score={this.state.currentScore}
        startGame={this.startGame} // 5. pass the function as a prop to the child
        inProgress={this.state.gameOn} // 2. share the state with the children
        questionsAnswered={this.state.questionsAnswered}
        resetCounter={this.resetCounter}
      />
      <QuestionsContainer
        questionsList={data.questions}
        inProgress={this.state.gameOn} // 2. share the state with the children
        updateScore={this.updateScore}
        startGame={this.startGame}
        questionCounter={this.questionCounter}
      />
      </div>
    );

  }
}

export default App;
