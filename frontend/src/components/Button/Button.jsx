import React from 'react';
import './button.scss';

const Button = ({ text, onClick }) => {
  return (
    <button className="back-button" onClick={onClick}>
      <strong>{text}</strong>
    </button>
  );
};

export default Button;
