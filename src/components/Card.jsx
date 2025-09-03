import React from 'react';

const Card = ({ children, className = '', glassmorphism = true, ...props }) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  if (glassmorphism) {
    return (
      <div
        className={`backdrop-blur-md bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl ${baseClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
  
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
