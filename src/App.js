import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Scores from "./Scores";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>High Scores per Country</h1>
      </header>
      <body>
        <Scores />
      </body>
    </div>
  );
}

export default App;
