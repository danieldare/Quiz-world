import React, { useState, useEffect } from 'react';
import QuestionsService from "./questions";
import Questions from './Questions/Questions';
import './App.scss';
import QuestionCount from './QuestionCount/QuestionCount';
import Answers from './Answers/Answers';

function App() {
  const [ state, setState ] = useState({
      isCorrect: false,
      activeQuestion: "",
      activeOptions: [],
      answer: "",
      checked: false
  });

  useEffect(() => {
    setState({
      activeQuestion: QuestionsService[0].question,
      activeOptions: QuestionsService[0].options
    })
  }, []);

  const checkCorrectAnswer = (value) => {
    const question = QuestionsService.find(q => q.question === state.activeQuestion);
    if(value === question.answer){
      setState({
        ...state,
        isCorrect: true,
        checked: true
      })
    }else{
      setState({
        ...state,
        isCorrect: false,
        checked: true
      })
    }
  }

  const nextQuestion = () => {
    if(state.checked){
      const curQuestion = QuestionsService.findIndex(q => q.question === state.activeQuestion);
      setState({
        ...state,
        activeQuestion: QuestionsService[curQuestion + 1].question,
        activeOptions: QuestionsService[curQuestion + 1].options,
        answer: "",
        checked: false
      })
    }
  }

  const prevQuestion = () => {
      const curQuestion = QuestionsService.findIndex(q => q.question === state.activeQuestion);
      setState({
        ...state,
        activeQuestion: QuestionsService[curQuestion - 1].question,
        activeOptions: QuestionsService[curQuestion - 1].options,
        answer: "",
        checked: false
      })
  }

  return (
    <div className="Quiz">
          <QuestionCount />
          <Questions question={state.activeQuestion} />
            {state.activeOptions.map(ans => 
              <Answers 
                options={ans} 
                checkCorrectAnswer={checkCorrectAnswer} 
                checked={state.checked}  />
            )}
            <div className="btn-container">
              <div className="btn-next" onClick={prevQuestion}>Previous</div>
              <div className="btn-next" onClick={nextQuestion}>Next</div>
            </div>
    </div>
  );
}

export default App;
