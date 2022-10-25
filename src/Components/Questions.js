import React, { useState } from 'react';
import '../index.css';

export function Questions(){
    const questions = [
        {
             questionText: "Vad heter Franrikes huvudstad?",
             answeroptions: [
                            { answerText: 'New york', isCorrect: false},
                            { answerText: 'Paris', isCorrect: true},
                            { answerText: 'Stockholm', isCorrect: false},
                            { answerText: 'Hongkong', isCorrect: false}
             ],
        },
        {
          questionText: "Vilker år grundades biltilverkaren Tesla?",
          answeroptions: [
                         { answerText: '1995', isCorrect: false},
                         { answerText: '2011', isCorrect: false},
                         { answerText: '2003', isCorrect: true},
                         { answerText: '2018', isCorrect: false}
          ],
     },
     {
      questionText: "Hur många böcker om Harry Potter finns det?",
      answeroptions: [
                     { answerText: '7', isCorrect: true},
                     { answerText: '9', isCorrect: false},
                     { answerText: '5', isCorrect: false},
                     { answerText: '3', isCorrect: false}
      ],
    },
    {
      questionText: "Vilket företag skapade Iphone?",
      answeroptions: [
                     { answerText: 'Intel', isCorrect: false},
                     { answerText: 'Volvo', isCorrect: false},
                     { answerText: 'Amazon', isCorrect: false},
                     { answerText: 'Apple', isCorrect: true}
      ],
    },
       ];
    
       const [currentQuestion, setcurrentQuestion] = useState(0);
       const [showScore, setshowScore] = useState(false);
       const [score, setscore] = useState(0);
      
      
       
    
       const handleAnswerbtn = (isCorrect) => {
         if(isCorrect === true){
             setscore(score + 1)
         }
    
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
          setcurrentQuestion(nextQuestion);
        } else {
          setshowScore(true);
        }
        
       }
       const restartQuiz = () => {   
        setscore(0)
        setshowScore(false)
        setcurrentQuestion(0)
      };
       return (
    
    <div className='app'>
                {}
                {showScore ? (
                    <div className='score-section'>Du fick {score} rätt av {questions.length}
                    <button className="restart-btn" onClick={restartQuiz} >Starta om</button>
                    </div>
                ) : (
                    <>
                    
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Fråga {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                           {questions[currentQuestion].answeroptions.map((answerOption) => 
                 <button onClick={ () => handleAnswerbtn(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
                        </div>
                    </>
                )}
            </div>
       )
};

