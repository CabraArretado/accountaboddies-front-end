import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from 'react';

//Mods
import Login from "./auth/Login"
import Register from "./auth/Register"

const ApplicationViews = props => {
    let props_reference = props
    console.log("ApplicationViews props: ", props_reference)

    return (
    <>
            <Route
                exact path="/" render={props => {
                    return <p>GG</p>
                }} />
                <Route
                exact path="/register" render={props => {
                    return <Register {...props_reference} />
                }}
            />
            <Route
                exact path="/login" render={props => {
                    return <Login {...props_reference} />
                }}
            />
    </>
    )
}

export default ApplicationViews