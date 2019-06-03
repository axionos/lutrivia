import React from 'react';


class Question extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <div className="question">
        <div>
          <p>{this.props.text}</p>
          <button>True</button>
          <button>False</button>
        </div>
      </div>
    )
  }
}

export default Question;
