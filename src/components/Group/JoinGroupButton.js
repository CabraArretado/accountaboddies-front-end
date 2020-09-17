import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';

import API from "../../modules/data_module"

const JoinGroupButton = React.memo(props =>{
    const groupId = props.groupId

    const handleJoin = () => {
        const newRelation = {
            group: groupId
        }

        API.post("group_user", newRelation)
    }

    return <>
        <Button onClick={handleJoin}>Join!</Button>
    </>
}
)

export default JoinGroupButton