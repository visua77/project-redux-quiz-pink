import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Answer = () => {
    const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex)

    const answer = useSelector((state) => state.quiz.answers[questionIndex])

    const dispatch = useDispatch()

    return (
        <div>
            {answer.isCorrect && <h3>YEAH!! {answer.answer} is GOOD answer!!</h3>}
            {!answer.isCorrect && <h3>NOOO!!YOU SUCKS!!</h3>}
            <button type="button" onClick={() =>dispatch(quiz.actions.goToNextQuestion())}>NEXT</button>
        </div>
    )
}