import React from 'react'
import PollResults from '../../components/PollResults'
import Button from '../../components/Button';

const History = ({ results, history,options, question, setViewMode }) => {
  console.log("History Page called");
  return (
    <div>
      
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800">View Poll History</h3>
        </div>
        
        <div className="space-y-3">
        {history.length > 0 && (
          history.map((poll, idx) => (
            <div key={idx}>
             
              <PollResults
                question={poll.question}
                results={poll.results}
                options={poll.options}
                showWaitingMessage={false}
              />
            </div>
          ))
        ) }
      </div>
      {question &&  (
          <div className="mb-5">
           
            <PollResults
              question={question}
              results={results}
              options={options}
              showWaitingMessage={false}
            />
          </div>
        )}
          {/* Show message if no polls exist */}
       
      {/* Button to go back to form */}
      <Button  onClick={() => setViewMode("form")}>Back to Create Poll</Button>

    </div>
  )
}

export default History