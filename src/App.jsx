import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import SubdomainRouter from "./SubdomainRouter";

function App() {
  return (
    <BrowserRouter>
      <SubdomainRouter />
    </BrowserRouter>
  );
}

export default App;
