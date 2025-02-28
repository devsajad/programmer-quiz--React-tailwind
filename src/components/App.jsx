import React, { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";
import Main from "./main";
import Question from "./Question";
import Options from "./Options";
import QuestionScreen from "./QuestionScreen";
import NextPrev from "./NextPrev";
import QuestionItem from "./QuestionItem";
import Progress from "./Progress";
import Loading from "./Loading";
import FinishScreen from "./FinishScreen";

function App() {
  const initialState = {
    // Loading , Ready , Start , Finished , Error
    questions: [],
    status: "loading",
    index: 0,
    answers: [],
  };
  const [{ questions, status, index, answers }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const questionLength = questions.length;

  function reducer(state, action) {
    switch (action.type) {
      case "dataRecieved":
        return { ...state, questions: action.payload, status: "ready" };

      case "start":
        return { ...state, status: "start" };

      case "prev":
        return { ...state, index: state.index - 1 };

      case "next":
        return { ...state, index: state.index + 1 };

      case "setAnswer":
        const updatedAnswers = [...state.answers];
        updatedAnswers[state.index] = action.payload + 1;
        return {
          ...state,
          answers: updatedAnswers,
          index: state.index + 1,
          status:
            state.index + 1 === state.questions.length
              ? "finished"
              : state.status,
        };

      case "restart":
        return { ...initialState, status: "ready", questions: state.questions };

      case "error":
        return { ...state, status: "error" };

      default:
        throw new Error("Action Unknown");
    }
  }

  useEffect(() => {
    try {
      fetch("/api/questions")
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "dataRecieved", payload: data });
        });
    } catch (error) {
      console.error(error);
      dispatch({ type: "error" });
    }
  }, []);

  return (
    <Main>
      {status === "loading" && <Loading text={"لطفا صبر کنید"} />}
      {status === "ready" && <StartScreen dispatch={dispatch} />}

      {status === "start" && (
        <QuestionScreen>
          <Question>
            <NextPrev
              dispatch={dispatch}
              index={index}
              questionLength={questionLength}
              answers={answers}
            />
            <QuestionItem questions={questions} index={index} />
            <Progress index={index} questionLength={questionLength} />
          </Question>

          <Options
            questions={questions}
            index={index}
            dispatch={dispatch}
            answers={answers}
          />
        </QuestionScreen>
      )}
      {status === "finished" && (
        <FinishScreen
          questions={questions}
          answers={answers}
          dispatch={dispatch}
        />
      )}
    </Main>
  );
}

export default App;