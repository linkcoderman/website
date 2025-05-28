import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EinsteinLandingPage from './components/EinsteinLandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EinsteinLandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;