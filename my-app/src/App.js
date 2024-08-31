import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'
import { useState } from 'react';

function App() {

  return (
    <div>
      <Header />
      <Content /> 
      <Footer />
    </div>
  );
}

export default App;
