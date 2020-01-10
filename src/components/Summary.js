import React from "react";
import { useSelector } from "react-redux";

export const Summary = () => {
  const answers = useSelector(state => state.quiz.answers);

  return (
    <>
      {answers.map(answer => (
        <div>
          <h3>
            {answer.question.id} {answer.question.questionText}
          </h3>
          <p>
            Your answer was: {answer.answer} and it is{" "}
            {answer.isCorrect ? "correct" : "wrong"}
          </p>
        </div>
      ))}
    </>
  );
};
