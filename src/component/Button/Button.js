import React from 'react';
import "./style.css";
import Loaders from '../loaders';

export default function Button(props) {
  const { label, className, disabled, onClick, isLoading } = props;
  const classes = ['button', disabled && 'disabled', className].filter(Boolean).join(' ');

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {isLoading ? <Loaders use={'button'} /> : label}
    </button>
  );
}