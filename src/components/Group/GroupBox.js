import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';

import API from "../../modules/data_module"
import JoinGroupButton from "./JoinGroupButton"

// moods

const GroupBox = (props) => {
    let group = props.group

    return <>
        <div className="container">
            <Link to={`groups/${group.id}`}><h1>{group.title}</h1></Link>
            <h4>{group.description}</h4>
            <h3>{group.population}/{group.size}</h3>
            <JoinGroupButton groupId={group.id}/>
        </div>
    </>
};

export default GroupBox;