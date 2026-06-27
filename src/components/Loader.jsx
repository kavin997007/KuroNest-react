import React from 'react';

const Loader = ({ message = 'Loading...' }) => {
  return (
    <div className="state-message">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
};

export default Loader;
