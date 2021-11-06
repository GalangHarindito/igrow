import React from 'react';
import "./style.css";

export default function Button(props) {
  const { label, className, disabled, onClick } = props;
  const classes = ['button', disabled && 'disabled', className].filter(Boolean).join(' ');

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}