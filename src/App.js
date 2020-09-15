import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ApplicationViews from './components/ApplicationViews';
import NavBar from "./components/NavBar/NavBar"
import './App.css';

function App() {
  return (
    <>
        <Router>
        <Route render={props => (
                <NavBar />
            )} />
          <div className="container-fluid" >
          <ApplicationViews />
          </div>
        </Router>
    </>
  );
}

export default App;
