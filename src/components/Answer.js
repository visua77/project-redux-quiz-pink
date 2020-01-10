import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

export const Answer = () => {
  const questionIndex = useSelector(state => state.quiz.currentQuestionIndex);

  const answer = useSelector(state => state.quiz.answers[questionIndex]);

  const dispatch = useDispatch();
  const photoPath = `../img/${answer.questionId}.jpg`;

  return (
    <div className="answer">
      {answer.isCorrect && <h4>YEAH!! {answer.answer} is a GOOD answer!!</h4>}
      {!answer.isCorrect && (
        <h4>
          No, {answer.answer} is wrong. Correct answer was{" "}
          {answer.question.options[answer.question.correctAnswerIndex]}
        </h4>
      )}
      <img src={photoPath} alt="correct answer" />
      <button
        type="button"
        onClick={() => dispatch(quiz.actions.goToNextQuestion())}
      >
        NEXT
      </button>
    </div>
  );
};
