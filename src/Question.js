import React from 'react';


class Question extends React.Component {
  render() {

    style={this.props.selected === this.props.answer ? {backgroundColor: "#39ff14"} : {backgroundColor:"red"}}

    return (
      <div className="question">
        <p>{this.props.text}</p>
        <button>True</button>
        <button>False</button>
      </div>
    )
  }
}
// style={this.props.selected === this.props.answer ? {backgroundColor: "#39ff14"} : {backgroundColor:"red"}}
export default Question;
