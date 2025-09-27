import React from 'react';

const Button = ({ children, onClick, type = 'button', disabled = false, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-gradient-to-r from-[#7765DA] to-[#1D68BD]
        text-white px-10 py-3 rounded-full font-semibold
        transition-opacity duration-200
        
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;