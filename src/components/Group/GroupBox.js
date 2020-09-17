import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';

import API from "../../modules/data_module"

// moods

const GroupBox = (props) => {
    let group = props.group

    return <>
        <div className="container">
            <h1>{group.title}</h1>
            <h4>{group.description}</h4>
            <h3>{group.population}/{group.size}</h3>
        </div>
    </>
};

export default GroupBox;