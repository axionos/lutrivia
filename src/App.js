import React from 'react';
import data from './data.js';
import GameInfo from './GameInfo.js';
import QuestionsContainer from './QuestionsContainer.js';

function App() {
  console.log(data)
  return (
    <div className="App">
      <GameInfo name={data.gameInfo.name} score={data.gameInfo.score}/>
      <QuestionsContainer questions_list={data.questions}/>
    </div>
  );
}

export default App;
