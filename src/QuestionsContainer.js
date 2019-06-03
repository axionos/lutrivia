import React from 'react';
import Question from './Question.js';

class QuestionsContainer extends React.Component {
  render() {

    const questionsLis = this.props.questions_list.map(function(question) {
      return <Question
        key={question.id}
        text={question.text}
        answer={question.answer}
        selected={question.selected}
         />
    })

    return (
      <div className="questions_container">
        <ul>
          {questionsLis}
        </ul>
      </div>
    )
  }
}

export default QuestionsContainer;
