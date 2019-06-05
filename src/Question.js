import React from 'react';


class Question extends React.Component {
  // when it's cliekced, if it matches with the answer
  // button turns green, otherwise, red
  handleClickTrue = event => {
    // debugger
    let findQuestion = this.props.questionsList.find(theQuestion => theQuestion.text === event.target.id)

    if(findQuestion.answer.toString() === event.target.value){
      event.target.style.backgroundColor='green'
      this.props.updateScore()
    } else {
      event.target.style.backgroundColor='red'
    }

    // SELECT ONLY ONE ANSWER
    if (event.target.previousElementSibling.type === "submit") {
      event.target.previousElementSibling.disabled = true
    } else if (event.target.nextElementSibling.type === "submit") {
      event.target.nextElementSibling.disabled = true
    }
    this.props.questionCounter()
    event.target.disabled = true
  }

  shuffled = this.props.questionsList.sort(() => 0.5 - Math.random()).slice(0, 5)

  questionList = this.shuffled.map(question => {
    return <li className="question"
      key={question.id}
    >
      <p>{question.text}</p>
      <button
        id={question.text}
        value={true}
        onClick={this.handleClickTrue}
      >
        True
      </button>
      <button
      id={question.text}
      value={false}
      onClick={this.handleClickTrue}
      >
      False</button>

    </li>
  })

  render() {
    // console.log('Questions Props',this.props)

    return(
      <div className="question">
        {this.questionList}
      </div>
    )
  }
}

export default Question;
