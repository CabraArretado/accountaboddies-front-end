import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import API from "../../modules/data_module"

// moods

const JoinEvent = (props) => {
    // Variables
    const [isLoading, setIsLoading] = useState(false); // Button is loading
    const [nothingFound, setNothingFound] = useState(false); // trigger to the Nothing Found info
    const [groups, setGroups] = useState([])

    // Search for event code
    const requestQuery = async () => {
        const eventQuery = await API.getWhere("events", "eventcode", eventCode);
        if (eventQuery.length === 0) {
            setNothingFound(true);
        }
        else if (eventQuery.length >= 1) {
            setGroups(eventQuery);
            setNothingFound(false);
        }
    }
    
    // Handle the submit of event code search
    const checkOnClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await requestQuery()
        setIsLoading(false);
    }


    return <>
        <div className="container --yellow-bg">
            <h5 className="--page-title">Join Gathering</h5>
            <p>Request Query</p>
            <hr />
            {/* <Form onSubmit={checkOnClick}>
                <FormGroup className="form-row p-4">
                    <Input className="col my-2" onChange={handleChange} type="text" name="eventcode" id="eventcode" placeholder="Event Code" />
                    <button disabled={isLoading} className="col --button" type="submit">Search</button>
                </FormGroup>
            </Form> */}
            requestQuery
        </div>
    </>
};

export default JoinEvent;