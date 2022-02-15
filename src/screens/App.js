import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addition from "./Addition";
import Subtraction from "./Subtraction";
import Counting from "./Counting";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" exact element={ <Home /> }></Route>
          <Route path="/addition" element={<Addition />}></Route>
          <Route path="/subtraction" element={<Subtraction />}></Route>
          <Route path="/counting" element={<Counting />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
