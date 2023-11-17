import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Routes, HashRouter, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import PageProj from './components/pageProj/PageProj';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/Projeto" element={<PageProj />} />
    </Routes>
  </BrowserRouter>
);

