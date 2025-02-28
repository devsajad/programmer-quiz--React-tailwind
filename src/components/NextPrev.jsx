import React from "react";

function NextPrev({ dispatch, index, questionLength, answers }) {
  return (
    <div className="flex justify-between w-full items-center mb-2">
      {index > 0 && (
        <button
          onClick={() => dispatch({ type: "prev" })}
          type="button"
          className="w-20 py-2 px-3 inline-flex items-center gap-x-2 text-xs font-semibold border border-transparent bg-blue-950 text-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-full hover:bg-inherit hover:text-inherit duration-200"
        >
          سوال قبلی
        </button>
      )}

      {index < questionLength - 1 && answers[index] && (
        <button
          onClick={() => dispatch({ type: "next" })}
          type="button"
          className="w-20 py-2 px-3 inline-flex items-center gap-x-2 text-xs font-semibold border border-transparent bg-blue-950 text-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-full hover:bg-inherit hover:text-inherit duration-200 mr-auto"
        >
          سوال بعدی
        </button>
      )}
    </div>
  );
}

export default NextPrev;
