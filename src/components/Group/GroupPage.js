import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';

import API from "../../modules/data_module"

// moods

const GroupPage = (props) => {
    let groupId = props.groupId
    const [ group, setGroup ] = useState({})

    const getGroup = async () => {
        const groupQuery = await API.get("group", groupId)
        setGroup(groupQuery)
    }

    useEffect(()=>{getGroup()}, [group])

    return <>
        <div className="container">
            <h1>{group.title}</h1>
            <h4>{group.description}</h4>
            <h3>{group.population}/{group.size}</h3>
        </div>
    </>
};

export default GroupPage;