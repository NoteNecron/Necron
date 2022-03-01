import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, I'm just learning ReactJs and TypeScript. Because I'm bored :D
        </p>
        <a
          className="App-link"
          href="https://github.com/NoteNecron/Note/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Vue3 project
        </a>
      </header>
    </div>
  );
}

export default App;