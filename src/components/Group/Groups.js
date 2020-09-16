import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';

// Mods
import API from "../../modules/data_module"
import SearchGroup from "./SearchGroup"


const Groups = (props) => {
    let props_reference = props

    // Variables
    const [isLoading, setIsLoading] = useState(false); // Button is loading
    const [nothingFound, setNothingFound] = useState(false); // trigger to the Nothing Found info
    const [groups, setGroups] = useState([])

    // Handle the GET requistion with the keyword
    const requestQuery = async (keywords) => {
        console.log(keywords)
        const list = await API.getCustom("group", `title=${keywords}`);
        if (list.length === 0) {
            setNothingFound(true);
        }
        else if (list.length >= 1) {
            setGroups(list);
            setNothingFound(false);
        }
    }


    return <>
        <section className="container">
            <h5 className="">Groups</h5>
            <SearchGroup {...props_reference} requestQuery={requestQuery} />
        </section>
        <Link to="/create_group">Create Group</Link>
    </>
};

export default Groups;