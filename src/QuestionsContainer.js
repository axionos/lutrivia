import React from 'react';
import Question from './Question.js';

class QuestionsContainer extends React.Component {
  render() {
    const shuffled = this.props.questions_list.sort(() => 0.5 - Math.random())
    let selected = shuffled.slice(0, 5)
    const questionsLis = selected.map(function(question) {
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
