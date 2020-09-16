import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';

import API from "../../modules/data_module"

// moods

const SearchGroup = (props) => {

    // Variables
    const [isLoading, setIsLoading] = useState(false); // Button is loading
    const [keyWords, setKeyWords] = useState("")

    const searchInput = useRef()

    // Handle the submit of event code search
    const search = async (e) => {
        e.preventDefault();
        setKeyWords(searchInput.current.value)
        await props.requestQuery(keyWords)
        setIsLoading(false);
    }


    return <>
        <div className="container">
            <h5 className="--page-title">Look for group</h5>
            <hr />
            <Form onSubmit={search}>
                <FormGroup className="form-row p-4">
                    <Input className="col my-2" type="text" ref={searchInput} name="search-input" id="search-input" placeholder="Search Group" />
                    <Button disabled={isLoading} className="col" type="submit">Search</Button>
                </FormGroup>
            </Form>
        </div>
    </>
};

export default SearchGroup;