import React from 'react'
import Button from '../../components/Button'

const JoinPage = ({ name, setName, onJoin }) => {
  return (
    
    <div className=" min-h-screen  flex flex-col flex-1 items-center justify-center px-4 py-8">
      
        <div className="w-full max-w-lg text-center">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Let's Get Started</h1>
            <p className="text-lg text-gray-600 max-w-5xl ">
              If you're a student, you'll be able to submit your answers, participate in live 
              polls, and see how your responses compare with your classmates
            </p>
          </div>

          {/* Name Input Section */}
          
            <div className="mb-6">
              <label className="block text-left text-gray-700 font-medium mb-3 text-lg">
                Enter your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                
                className="w-full px-4 py-4 border bg-gray-300 border-gray-300 rounded-lg focus:outline-none text-lg"
              />
            </div>

            {/* Continue Button */}
            <Button 
              onClick={onJoin}
              disabled={!name.trim()}
              
            >
              Continue
            </Button>
          
        </div>
      </div>
   
  )
}

export default JoinPage