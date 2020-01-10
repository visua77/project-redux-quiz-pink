import React from "react";
import { useSelector } from "react-redux";

export const Points = () => {
  const answers = useSelector(state => state.quiz.answers);

  let points = 0;

  answers.forEach(e => {
    if (e.isCorrect) {
      points++;
    }
  });

  return (
    <div className="counter">
      <h4>
        Your score is {points} out of {answers.length}
      </h4>
    </div>
  );
};
