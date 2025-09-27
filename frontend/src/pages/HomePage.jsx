import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedRole,setSelectedRole]=useState("");
  const handleNavigation=()=>{
    if(selectedRole==="student"){

      navigate('/student');
    }
    else if(selectedRole==="teacher"){
      navigate('/teacher')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to the Live Polling System
          </h1>
          <p className="text-xl text-gray-600">
            Please select the role that best describes you to begin using the live polling system
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Student Card */}
          <div 
          className={`bg-white rounded-lg border-2 p-6 cursor-pointer ${
              selectedRole === 'student' ? 'border-blue-500' : 'border-gray-200'
            }`}
            onClick={() => setSelectedRole('student')}
          >
          
            <h3 className="text-2xl font-bold text-gray-800 mb-4">I'm a Student</h3>
            <p className="text-gray-600 mb-6">
              Learn and participate in real-time polls, submit your answers, and engage with your classroom activities.
            </p>
           
          </div>

          {/* Teacher Card */}
          <div 
                className={`bg-white rounded-lg border-2 p-6 cursor-pointer ${
              selectedRole === 'teacher' ? 'border-blue-500' : 'border-gray-200'
            }`}
            onClick={() => setSelectedRole('teacher')}
          >
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">I'm a Teacher</h3>
            <p className="text-gray-600 mb-6">
              Create and manage polls, ask questions, and monitor your students' responses in real-time.
            </p>
           
          </div>
        </div>

        {/* Continue Button */}
        <Button onClick={handleNavigation} disabled={!selectedRole} 
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default HomePage;