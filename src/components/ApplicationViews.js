import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const ApplicationViews = props => {

    return (
    <>
            <Route
                exact path="/" render={props => {
                    return <p>GG</p>
                }} />
    </>
    )
}

export default ApplicationViews