import React from "react";

function Progress({ index, questionLength }) {
  const percentage = (index / (questionLength - 1)) * 100;
  return (
    <div className="w-1/2">
      <div
        className="mb-2 flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow="25"
        aria-valuemin="10"
        aria-valuemax="100"
      >
        <div
          className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-900 text-xs text-white text-center whitespace-nowrap transition duration-500"
          style={{ width: `${percentage}%`}}
        ></div>
      </div>
      <p className="text-blue-900 text-[1rem] font-bold">{questionLength} / {index+1}</p>
    </div>
  );
}

export default Progress;
