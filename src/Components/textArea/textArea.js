//Library
import React, { useState } from 'react';
import './textArea.css';

//Component import


function TextAreaBox(props) {
  //State

  //Etats

  //Méthodes
  const onChangeTextHandler = event => {
    props.changeState([event.target.value]);
  };
  

  //JSX
  return (
    <div id="divTextAreaBox">
      <textarea
      id="TextAreaBox"
      onChange={onChangeTextHandler}>
        {props.textBoxValue}
      </textarea>
    </div>
  );
};

export default TextAreaBox;