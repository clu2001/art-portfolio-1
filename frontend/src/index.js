import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Characters from "./Pages/Characters"
import Contact from "./Pages/Contact"
import Gallery from "./Pages/Gallery"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Navbar from "./Components/Navbar"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/characters" element={<Characters/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
