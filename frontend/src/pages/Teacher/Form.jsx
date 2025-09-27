import React from "react";
import Button from "../../components/Button";

const Form = ({ onSubmit, options, question, dispatch }) => {
  return (
    <div className="w-full  bg-white px-16 text-left">
      {/* Header Section */}
      <div className=" mb-2 text-left">
        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          ✦ Intervue Poll
        </span>
        <h1 className="text-4xl font-bold mt-6 mb-2">
          Let’s <span className="text-black">Get Started</span>
        </h1>
        <p className="text-gray-500 max-w-2xl">
          You’ll have the ability to create and manage polls, ask questions,
          and monitor your students' responses in real-time.
        </p>
      </div>
      {/* Form Section */}
      <form onSubmit={onSubmit} className="space-y-8">
        {/* Question */}
        <div>
          <label className="block text-lg font-semibold mb-2 text-left">
            Enter your question
          </label>
          <div className="flex items-start justify-between">
            <textarea
              rows={3}
              value={question}
              maxLength={100}
              placeholder="Type your question here..."
              className="w-[865px] h-[210px] bg-gray-100 border border-gray-300 rounded-lg p-4 resize-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) =>
                dispatch({ type: "SET_QUESTION", payload: e.target.value })
              }
            />
            <span className="text-gray-400 ml-2 text-sm self-end">
              {question.length}/100
            </span>
          </div>
        </div>

        <div>
          {/* Header row */}
          <div className="flex justify-between items-center text-lg font-semibold mb-2">
            <label>Edit Options</label>

          </div>

          {options.map((opt, idx) => (
            <div
              key={idx}
              className="flex items-center mb-3"
            >
              {/* Option Input with Index */}
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white text-sm">
                  {idx + 1}
                </span>
                <input

                  value={opt}
                  className="border border-gray-300 rounded-lg p-2 max-w-7xl focus:ring-2 focus:ring-purple-500"
                  onChange={(e) =>
                    dispatch({
                      type: "SET_OPTIONS",
                      index: idx,
                      payload: e.target.value,
                    })
                  }
                />
              </div>

              {/* Correctness Radio closer to input */}

              <div className="flex items-center space-x-3 ml-4">
                <label className="flex items-center space-x-1">
                  <input type="radio" name={`correct-${idx}`} />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="radio" name={`correct-${idx}`} defaultChecked />
                  <span>No</span>
                </label>
              </div>
            </div>
          ))}

          <div className="flex justify-start  border-purple-950">

            <button
              type="button"
              className="mt-3 text-purple-600 font-medium text-left border-[1px] border-purple-600 px-4 py-2 rounded-lg"
              onClick={() => dispatch({ type: "ADD-OPTION" })}
            >
              + Add More option
            </button>
          </div>
        </div>

        {/* Divider + Footer */}
        <div className="pt-8 border-t border-gray-300 flex justify-end">
          <Button
            type="submit"
            className="bg-purple-600 text-white  rounded-full shadow hover:bg-purple-700"
          >
            Ask Question
          </Button>
        </div>
      </form >
    </div >
  );
};

export default Form;







