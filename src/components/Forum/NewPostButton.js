import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';
import {getMyGroups} from "../../App"

import API from "../../modules/data_module"

const NewPostButton = React.memo(props =>{

    let groupId = props.groupId

    const [isLoading, setIsLoading] = useState(false)

    const handleNewPost = async () => {
        return <Redirect to={`/group=${groupId}/new_post`} />
    }

    return <>
        <Link to={`/group=${groupId}/new_post`}> <Button>Create New Post</Button> </Link>
    </>
}
)

export default NewPostButton