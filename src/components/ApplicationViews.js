import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from 'react';

//Mods
import Login from "./auth/Login"
import Register from "./auth/Register"
import Home from "./Home/Home"
import Groups from "./Group/Groups"
import CreateGroup from "./Group/CreateGroup"
import GroupPage from "./Group/GroupPage"
import MyGroups from "./Group/MyGroups"

const ApplicationViews = props => {
    let props_reference = props
    let myGroups = 
    console.log("ApplicationViews props: ", props_reference)

    return (
    <>
            <Route
                exact path="/" render={props => {
                    return <Home {...props}/>
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
            <Route
                exact path="/groups" render={props => {
                    return <Groups {...props_reference} />
                }}
            />
            <Route
                exact path="/my_groups" render={props => {
                    return <MyGroups {...props_reference} getMyGroups={props_reference.getMyGroups} myGroups={props_reference.myGroups} />
                }}
            />
            <Route
                exact path="/create_group" render={props => {
                    return <CreateGroup {...props_reference} />
                }}
            />
            <Route
                exact path="/groups/:groupId(\d+)" render={props => {
                    return <GroupPage groupId={parseInt(props.match.params.groupId)} {...props} />
                }}
            />
    </>
    )
}

export default ApplicationViews