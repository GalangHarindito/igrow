import React from 'react';
import "./style.css";

export default function Button(props) {
  const { buttonProps, label, className, disabled, onClick } = props;
  const classes = ['button', disabled && 'disabled', className].filter(Boolean).join(' ');

  return (
    <button className={classes} disabled={disabled} onClick={onClick} {...buttonProps}>
      {label}
    </button>
  );
}