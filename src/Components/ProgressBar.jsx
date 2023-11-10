import React from 'react'

const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className="h-5 w-100 m-4 mb-4 rounded-full bg-white">
      <div
        style={{ width: `${progressPercentage}%`}}
        className="h-full rounded-full bg-amber-400">
      </div>
    </div>
  );
};

export default ProgressBar