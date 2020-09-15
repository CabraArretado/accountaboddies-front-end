import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ApplicationViews from './components/ApplicationViews';
import NavBar from "./components/NavBar/NavBar"
import './App.css';



function App() {
  
  // AUTHENTICATION FEATURES
  // ALL AUTHENTICATION FEATURES (BUT STATE) MUST BE PASSED HERE INSIDE THE auth obj
    const [loggedIn, setIsLoggedIn] = useState(false)

  const auth = {
    isAuthenticated: () => {
        return loggedIn || localStorage.getItem("bangazon_token") !== null
      },

    register: (userInfo) => {
        return fetch("http://127.0.0.1:8000/account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(res => {
                if ("token" in res) {
                    localStorage.setItem( "accountaboddies_token", res.token )
                    setIsLoggedIn(true)
                }
            })
    },

    login: (credentials) => {
        return fetch("http://127.0.0.1:8000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem( "accountaboddies_token", res.token )
                    setIsLoggedIn(true)
                }
            })
    },

    logout: () => {
        setIsLoggedIn(false)
        localStorage.removeItem("accountaboddies_token")
    }
  }
  ///

  
  return (
    <>
        <Router>
        <Route render={props => (
                <NavBar />
            )} />
          <div className="container" >
          <ApplicationViews />
          </div>
        </Router>
    </>
  );
}

export default App;
