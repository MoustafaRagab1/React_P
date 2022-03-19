import React, { Component } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Index from "./Components/Index"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={ <Index/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes >
      </BrowserRouter>
    ) 
  }
}

export default App;
