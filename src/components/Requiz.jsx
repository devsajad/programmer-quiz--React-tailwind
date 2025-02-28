function Requiz({ dispatch }) {
  return (
    <button
      className="btn bg-blue-950 text-gray-50 mx-auto mt-7"
      onClick={() => dispatch({ type: "restart" })}
    >
      آزمون مجدد
    </button>
  );
}

export default Requiz;
