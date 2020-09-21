import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';

import API from "../../modules/data_module"

// moods

const CommentaryBox = (props) => {

    let post = props.post
    const commentary = props.commentary
    //TODO: formate the date


    return <>
        <div className="">
            <Link to="/"><h1>{commentary.title}</h1></Link>
            <h4>{commentary.content}</h4>
        </div>
    </>
};

export default CommentaryBox;