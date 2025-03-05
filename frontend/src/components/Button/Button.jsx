import React from 'react';
import './button.scss';

const Button = ({ text, onClick, underline = false, fontSize }) => {
  return (
    <button
      className={`back-button ${underline ? "underline" : ""}`}
      onClick={onClick}
      style={fontSize ? { fontSize } : {}}
    >
      {text}
    </button>
  );
};

export default Button;
