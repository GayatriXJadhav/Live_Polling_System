import React from 'react';

const PollResults = ({ question, results, options, showWaitingMessage = false }) => {
    

    return (
        <div className=" my-25 " >


            <h3 className="text-2xl font-bold text-gray-800">Question </h3>
            <div className="max-w-2xl mx-auto my-10 border-[1px] ">

                <div className="bg-gray-600 text-white p-4 rounded-t-lg mb-[-1px]">
                    <p className="text-lg font-medium text-left ">{question}</p>
                </div>
               
               

                {/* Options List */}
                <div className="space-y-3">
                    {options.map((opt, idx) => (
                        <div key={idx} className="relative mx-2 p-4 mt-3 m-3  rounded-lg overflow-hidden border border-gray-300">
                            {/* Progress Bar Background */}
                            <div
                                className="absolute top-0 left-0 h-full bg-purple-500 transition-all duration-500"
                                style={{ width: `${results[opt] || 0}%` }}
                            ></div>

                            {/* Content */}
                            <div className="relative z-10 flex  justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <span className="text-lg  bg-white p-1 font-medium text-gray-800 rounded-full" >{idx + 1}</span>
                                    <span className="text-lg font-medium text-gray-800">{opt}</span>
                                </div>
                                <span className="text-lg font-bold text-gray-800">{results[opt] || 0}%</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            {showWaitingMessage && (
                <div className="text-center mt-6">
                    <p className="text-xl text-black font-bold">Wait for the next question...</p>
                </div>
            )}
        </div>
    );
};

export default PollResults;





