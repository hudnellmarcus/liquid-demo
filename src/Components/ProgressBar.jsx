import React, { useState } from 'react'

const ProgressBar = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100; 

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200">
            Step {currentStep}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-amber-600">
            {progress}%
          </span>
        </div>
      </div>
      <div className="w-full bg-amber-200 rounded-full h-2">
        <div
          style={{ width: `${progress}%` }}
          className="bg-amber-600 rounded-full h-2"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar