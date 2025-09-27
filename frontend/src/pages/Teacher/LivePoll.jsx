import React from 'react'
import Button from '../../shared/Button'
import PollResults from '../../shared/PollResults'

const LivePoll = ({ question, options, results, onSubmit }) => {
  console.log("Live Poll Render");
  const totalVotes = results && Object.values(results).length > 0
    ? Object.values(results).reduce((sum, count) => sum + count, 0)
    : 0;
 console.log("Results",results);
 console.log("Total votes:", totalVotes);
  const hasResponses = totalVotes > 0;

  console.log("Total votes",totalVotes);
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {!hasResponses ? (
         <div className="max-w-2xl mx-auto my-10">
            {/* Waiting Loader */}
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
              <p className="text-xl font-semibold text-gray-700 mb-2">
                Waiting for students to answer...
              </p>
              <p className="text-gray-600">
                The poll is live and waiting for student responses
              </p>
            </div>
          </div>
        ) : (

          <PollResults
            question={question}
            results={results}
            options={options}
            showWaitingMessage={false}
          />
        )}


        <div className='flex justify-end'>
        <Button
          onClick={onSubmit}
          type='button'
        >Ask New Questions
        </Button>
      </div>
    </div>
    </div>  
       
  )
}

export default LivePoll