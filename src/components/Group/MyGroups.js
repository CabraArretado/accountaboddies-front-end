import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';

// Mods
import API from "../../modules/data_module"
import GroupBox from "./GroupBox"


const MyGroups = (props) => {

    const myGroups = props.myGroups

    return <>
        <section className="container">
            <h5 className="">Groups</h5>
                {myGroups.map(group => <GroupBox key={group.id} group={group}/>)}
        </section>
        <Link to="/create_group">Create Group</Link>
    </>
};

export default MyGroups;