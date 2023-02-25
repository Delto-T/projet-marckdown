//Library
import React, {useState} from 'react';
import './App.css';

//Component import
import TextAreaBox from '../Components/textArea/textArea';
import PreviewMD from '../Components/previewMD/previewMD';


function App() {
  //State
  const [texteSaisi, setTexteSaisi] = useState(["# `Prévisualisateur - Believemy`\n### Oh ! De la magie !\nEn réalité, pas vraiment : ceci s\'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !\n\n### Cas d\'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n[Believemy](https://believemy.com)"]);
  
  //Etats

  //Méthode
  const modificationText = texte => {
  
    let newTexteSaisi = [...texteSaisi];
    newTexteSaisi = [...texte];

    setTexteSaisi(newTexteSaisi);
  };
  
  //JSX
  return (
    <div className="App">
      <h1>Markdown Preview</h1>
      <div id="body">
        <TextAreaBox textBoxValue={texteSaisi} changeState= {modificationText}/>
        <PreviewMD textBoxValue={texteSaisi}/>
      </div>
    </div>
  );
}

export default App;
