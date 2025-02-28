import React from "react";
function QuestionItem({ questions, index }) {
  return <h2 className="my-auto">{questions[index].question}</h2>;
}

export default QuestionItem;
