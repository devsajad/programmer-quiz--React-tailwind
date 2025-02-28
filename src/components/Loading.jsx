import React from "react";

function Loading({ text }) {
  return (
    <div className="section-container justify-center ">
      <div className="flex items-center gap-2  justify-center my-auto">
        <div
          className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-950 justify-center items-center"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">{text}</span>
        </div>
        <span className="font-semibold">{text}</span>
      </div>
    </div>
  );
}

export default Loading;
