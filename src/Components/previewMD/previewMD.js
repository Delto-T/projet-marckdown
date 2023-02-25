//Library
import React from 'react';
import './previewMD.css';
import marked from "marked";

//Component import


function PreviewMD(props) {
  //State

  //Etats 

  //Méthode
  marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: true, 
    smartLists: true,
    smartypants: false,
    xhtml: false
  });


  //JSX
  return (
    <div id="divPreviewMD">
        <div id="PreviewMD" >
          <p dangerouslySetInnerHTML={{__html:marked(props.textBoxValue[0])}}></p>
        </div>
    </div> 
  );
}

export default PreviewMD;