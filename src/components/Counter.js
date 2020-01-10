import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  const quiz = useSelector(state => state.quiz);
  const currentQuestionIndex = quiz.currentQuestionIndex;

  return (
    <div className="counter">
      <h4>
        Question: {quiz.questions[currentQuestionIndex].id} /{" "}
        {quiz.questions.length}
      </h4>
    </div>
  );
};
