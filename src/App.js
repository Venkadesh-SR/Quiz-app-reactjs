import { buildQueries } from '@testing-library/react';
import React from 'react'
import {useState} from 'react'
import './App.css'
import primary from './App.css'

 function App() {
   const intialvalue = 0;
   const[question,setQuestion] = useState(intialvalue);
   const[score,setScore] = useState(0);
   const[color,setColor] = useState("cont");

  const Questionsoption = [
    {
    Question : "In React.js which one of the following is used to create a class for Inheritance ?",
   Answers:
    [
      {Answer:"a) Create", correct:false},
      {Answer:"b) Extends", correct:true},
      {Answer:"c) Inherits", correct:false},
      {Answer:"d) Delete", correct:false},
    ]
    },
    {
      Question : "What is the default port number in which the application run ?",
      Answers:[
        {Answer:"a) 3000", correct:true},
        {Answer:"b) 8080", correct:false},
        {Answer:"c) 5000", correct:false},
        {Answer:"d) 3000", correct:false},
    ]
    },
    {
        Question : "Which of the following is true regarding Babel ?",
        Answers:[
          {Answer:"a) Compiler", correct:false},
          {Answer:"b) Transpilar", correct:false},
          {Answer:"c) Both of the above", correct:true},
          {Answer:"d) None of the above", correct:false},
    ]
    }, 
    {
          Question : "Which of the following function is true about changing the state in React.js ?",
          Answers:[
            {Answer:"a) this.State{}", correct:false},
            {Answer:"b) this.setState", correct:true},
            {Answer:"c) this.setChangeState", correct:false},
            {Answer:"d) All of the above", correct:false},
    ]
    }, 
    {
            Question : "Which of the following method is true about referring parent class in React.js ?",
            Answers:[
              {Answer:"a) self()", correct:false},
              {Answer:"b) inherits()", correct:false},
              {Answer:"c) this()", correct:false},
              {Answer:"d) super()", correct:true},
            ]
      }
  ]
const reset = () =>{
    setQuestion(intialvalue);
    setScore(intialvalue)
  }
const handlequestion =(correct) =>{
    if(correct){
      setScore(score+1)
    }
if(question<4){
    setQuestion(question+1)
   }
};
 
return (
    <>
    <h1 className='header'>Quiz site</h1>
    <div className='container'>
      <div className='content'>
      <div className='questioncount'>
        <span className='span'>{question+1}</span>/{Questionsoption.length}
      </div>
       <div className='questiontext'>
        {Questionsoption[question].Question}
      </div>
      <div className='questionanswer'>
      {Questionsoption[question].Answers.map((answer)=>
                          (
                              <button className='options' onClick={()=>handlequestion(answer.correct)}>{answer.Answer}</button>
                          ))}
      </div>
<h1 className='score'>score is {score} / {question}</h1>

<button className='submit' onClick={reset}>SUBMIT</button>
</div>
</div>
</>)
}
export default App;