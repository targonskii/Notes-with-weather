import React from 'react';

export default function Button({ type, text, handleClick, className }) {
  return (
    <div className={className} type={type} onClick={handleClick}>
      {text}
    </div>
  );
}
