import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import { Answer } from "components/Answer";
import { Summary } from "components/Summary";
import { Counter } from "components/Counter";

export const CurrentQuestion = () => {
  const question = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const dispatch = useDispatch();
  const answers = useSelector(state => state.quiz.answers);
  const isFinished = useSelector(state => state.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const handleClick = index => {
    dispatch(
      quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index })
    );
  };

  return (
    <div>
      {!isFinished && (
        <>
          <h1>Question: {question.questionText}</h1>
          {answers.length < question.id && (
            <>
              {question.options.map((e, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleClick(index)}
                  >
                    {e}
                  </button>
                );
              })}
            </>
          )}
          {answers.length === question.id && <Answer />}
          <Counter />
        </>
      )}
      {isFinished && <Summary />}
    </div>
  );
};
