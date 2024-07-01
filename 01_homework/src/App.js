import React, {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return(
    <div className="container">
        <Header/>
        <Content/>
        <Footer/>
    </div>
);

}

export default App;
