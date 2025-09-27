import React from 'react';
import Button from './Button';

const PollForm = ({ question, options, selectedOption, onOptionSelect, onSubmit, timer = 15 }) => {
    return (
        <div className="max-w-2xl mx-auto my-10">
            {/* Timer */}
            <div className="flex space-x-4 justify-center mb-6">
                <h3 className="text-2xl text-left font-bold text-gray-800  mb-4">Question 1</h3>
                <div className=" text-red-600 px-4 py-2  font-bold">
                    00:{timer.toString().padStart(2, '0')}
                </div>
            </div>

            {/* Question Header */}
            
            
            <div className="border-[1px] border-gray-200 rounded-lg">
                {/* Question */}
                <div className="bg-gray-600 text-white p-4 rounded-t-lg">
                    <p className="text-lg font-medium text-left">{question}</p>
                </div>

                {/* Options List with Radio Buttons */}
                <div className="space-y-3 p-6">
                    {options.map((opt, idx) => (
                        <div 
                            key={idx} 
                            className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                selectedOption === opt 
                                    ? 'border-purple-500 bg-purple-50' 
                                    : 'border-gray-300 hover:border-gray-400'
                            }`}
                            onClick={() => onOptionSelect(opt)}
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    {/* Custom Radio Button */}
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                        selectedOption === opt 
                                            ? 'border-purple-500 bg-purple-500' 
                                            : 'border-gray-400'
                                    }`}>
                                        {selectedOption === opt && (
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        )}
                                    </div>
                                    
                                    <span className="text-lg font-medium text-gray-800">
                                         {opt}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
                <Button 
                    onClick={onSubmit}
                    disabled={!selectedOption}
                    className="px-12 py-3"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default PollForm;