import React from 'react';
// import { Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
          <Route path='/'/>
      </Switch>
        
      </Router>
    </>
  );
}

export default App;
