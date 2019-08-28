import React from "react";
import PhotoContainer from "./components/PhotoContainer";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      < Header />
      < PhotoContainer />
    </div>
  );
}

export default App;
