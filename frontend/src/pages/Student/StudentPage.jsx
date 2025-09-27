import React, { act, useEffect, useReducer, useState } from "react";
import useSocket from "../../hooks/useSocket";
import JoinPage from "./JoinPage";
import PollPage from "./PollPage";

const initialState = {
  poll: null,
  selectedOptions: "",
  results: [],

  hasSubmitted: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "NEW_POLL":
      return {
        ...state,
        poll: action.payload,
        selectedOptions: "",
        results: [],
      };
    case "SELECT_OPTION":
      return { ...state, selectedOptions: action.payload };
    case "SET_RESULTS":
      return { ...state, results: action.payload };

    case "RESET":
      return initialState;
    default:
      return state;
  }
}



const StudentPage = () => {
  const socket = useSocket();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");

  // 👇 viewMode: "join" | "poll" | "kicked"
  const [viewMode, setViewMode] = useState("join");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (!socket) return;
    socket.on("newPoll", (pollData) => {
      console.log("New Poll Received", pollData);
      dispatch({ type: "NEW_POLL", payload: pollData });
      setHasSubmitted(false);
      setViewMode("poll");
    });
    socket.on("pollResults", (data) => {
      console.log("Poll Data received", data);
      dispatch({ type: "SET_RESULTS", payload: data.percent });
    });
    return () => {
      socket.off("newPoll");
      socket.off("pollResults");
    };
  }, [socket]);

  const handleSubmit = (e) => {

    if (!state.selectedOptions) return alert("Select one option");
    socket.emit("submit-answers", {
      pollId: state.poll.id,
      answers: state.selectedOptions,
      studentName: name,
    })
    setHasSubmitted(true);
  }

  const handleJoin = () => {
    if (!name.trim()) return alert("Enter your name");
    socket.emit("join-student", { name });
    setViewMode("poll"); // after join, go to poll waiting view
  };

  if (viewMode === "join") {
    return <JoinPage name={name} setName={setName} onJoin={handleJoin} />
  }

  return (
    <PollPage
     poll={state.poll}
      selectedOptions={state.selectedOptions}
      results={state.results}
      hasSubmitted={hasSubmitted}
      dispatch={dispatch}
      onSubmit={handleSubmit}
    />

  );
};

export default StudentPage;
