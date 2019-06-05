import React from 'react';
import Question from './Question.js';

class QuestionsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isSelected: null
    }
  }

  render() {
    // console.log('questionscontainer props',this.props)

    // 3. remove questions depending on inProgress(state of the parent)
    if (this.props.inProgress === false) {
      return null
    }


    return (
      <div className="questions_container">
        <ul>
          <Question
          questionsList={this.props.questionsList}
          updateScore={this.props.updateScore}
          questionCounter={this.props.questionCounter}
          />
        </ul>
      </div>
    )
  }
}
export default QuestionsContainer;
