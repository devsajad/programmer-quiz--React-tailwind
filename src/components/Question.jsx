import React from "react";
import NextPrev from "./NextPrev";
import Progress from "./Progress";
import QuestionItem from "./QuestionItem";

function Question({ children }) {
  return (
    <section className="bg-orange-50 basis-45/100 md:basis-1/2 gap-0 p-5">
      {children}
    </section>
  );
}

export default Question;
