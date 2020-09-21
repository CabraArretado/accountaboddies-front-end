import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';
import {getMyGroups} from "../../App"

import API from "../../modules/data_module"

import NewCommentaryForm from "./NewCommentaryForm"

const NewCommentaryButton = React.memo(props =>{

    let groupId = props.groupId
    let postId = props.postId

    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const trigger = () => {
        setIsOpen(!isOpen)
    }

    return <>
        <button onClick={trigger}>New Commentary</button>
        { isOpen ? <NewCommentaryForm postId={postId} groupId={groupId} /> : null }
    </>
}
)


export default NewCommentaryButton