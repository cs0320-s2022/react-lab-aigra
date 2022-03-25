import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function TextBox(props : {text : String, change : Function}) {
  return (
    <div className="TextBox">
      <label htmlFor="">{props.text}</label>
      <br />
      <input type={'text'} onChange={a => props.change(a.target.value)}></input>
      <br />
    </div>
  );
}

export default TextBox;
