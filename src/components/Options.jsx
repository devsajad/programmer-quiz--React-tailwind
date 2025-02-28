import React from "react";
function Options({ questions, index, dispatch, answers}) {
  return (
    <section className="option">
      {questions[index].options.map((option, i) => {
        return (
          <button
            className={`${
              answers[index] && answers[index] !== i + 1 ? "answered" : ""
            }`}
            key={i}
            onClick={() => {
              dispatch({ type: "setAnswer", payload: i });
            }}
          >
            <p>{option}</p>
          </button>
        );
      })}
    </section>
  );
}

export default Options;
