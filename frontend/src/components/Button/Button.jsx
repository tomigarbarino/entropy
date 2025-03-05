import React from 'react';
import './button.scss';

const Button = ({ text, onClick, underline = false }) => {
  return (
    <button
      className={`back-button ${underline ? "underline" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
