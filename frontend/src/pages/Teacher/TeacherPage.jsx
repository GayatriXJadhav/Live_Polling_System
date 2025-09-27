import React, { act, useReducer, useState } from "react";
import useSocket from "../../hooks/useSocket";
import { useEffect } from "react";
import Form from "./Form";
import History from "./History";
import LivePoll from "./LivePoll";
import Button from "../../shared/Button";



const initialState = {
  question: "",
  options: ["", ""],
  results: {},
  history: [],
  currentPollId: null,
};
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUESTION":
      return { ...state, question: action.payload };

    case "SET_OPTIONS":
      const updatedOptions = [...state.options];
      updatedOptions[action.index] = action.payload;
      return { ...state, options: updatedOptions };
    case "ADD-OPTION":
      return { ...state, options: [...state.options, " "] };
    case "SET_RESULTS": // <-- new case
      return { ...state, results: action.payload };
    case "SET_CURRENT_POLL":
      return { ...state, currentPollId: action.payload };
    case "SET_HISTORY":
      return {
        ...state,
        history: [...state.history, action.payload],
        results: {},
        question: "",
        options: ["", ""],
      };

    default:
      return state;
  }
};

const TeacherPage = () => {
  const socket = useSocket();
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [viewMode, setViewMode] = useState("form");
  useEffect(() => {
    if (!socket) return;
    socket.on("connect", () => {
      console.log("Connected to backend", socket.id);
    });
    const handleresults = (data) => {
      if (data.pollId === formState.currentPollId) {
        dispatch({ type: "SET_RESULTS", payload: data.percent });
        setViewMode("live");
      }
    };
    socket.on("pollResults", handleresults);

    return () => {
      socket.off("pollResults", handleresults);
    };
  }, [socket, formState.currentPollId]);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.question.trim()) return;

    const pollData = {
      id: Date.now(),
      question: formState.question,
      options: formState.options.filter((o) => o.trim() !== ""),
    };
    socket.emit("createPoll", pollData);
    dispatch({ type: "SET_CURRENT_POLL", payload: pollData.id });
    setViewMode("live");
  };

  const handleNewSubmit = (e) => {

    socket.emit("end-poll", formState.question);
    dispatch({
      type: "SET_HISTORY",
      payload: {
        question: formState.question,
        options: formState.options,
        results: formState.results,
      },
    });
    setViewMode("form");
  };


  return (
    <div className="teacher">

      {viewMode === "form" && (
        <Form onSubmit={handleSubmit}
          options={formState.options}
          question={formState.question}
          dispatch={dispatch} />
      )}

      {viewMode === "live" && (
        <div className="flex  justify-end">
          <Button
            onClick={() => setViewMode("history")}>
            View Poll History
          </Button>
        </div>

      )}

      {/* Live Results */}
      {viewMode === "live" && (
        <div >


          <LivePoll
            question={formState.question}
            options={formState.options}
            results={formState.results} onSubmit={handleNewSubmit} />
        </div>
      )}

      {viewMode === "history" && (
        <History
          results={formState.results}
          history={formState.history}
          options={formState.options}
          question={formState.question}
          setViewMode={setViewMode}
        />
      )}
    </div>
  );
};

export default TeacherPage;


