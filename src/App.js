import Education from "./components/Education";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import React, { Component } from 'react';

function App() {
  return (
    <div>
      <Home />
      <Router>
        <Routes>
          <Route exact path = '/Education' element={<Education />}/>
          <Route exact path = '/Work' element={<Work />}/>
          <Route exact path = '/Skills' element={<Skills />}/>
        </Routes>
      </Router>
      <Education />
      <Work />
    </div>
  );
}

export default App;
