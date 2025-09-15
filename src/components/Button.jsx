import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'md',
  block = false,
  disabled = false,
  ...props 
}) => {
  const classNames = [
    'btn',
    variant,
    size !== 'md' ? `btn-${size}` : '',
    block ? 'btn-block' : '',
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={classNames} 
      onClick={onClick} 
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

