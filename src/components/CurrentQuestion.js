import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const handleClick = (index) => {
    dispatch(quiz.actions.submitAnswer({questionId : question.id , answerIndex:index}))
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((e, index) => {
        return <button key={index} type="button" onClick={() => (handleClick(index))}>{e}</button>
      })}
    </div>
  )
}
