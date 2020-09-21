import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';

import API from "../../modules/data_module"
import CommentaryBox from "./CommentaryBox"

// moods

const PostDetails = (props) => {
    let groupId = props.groupId
    let postId = props.postId
    const [ commentaries, setCommentaries ] = useState({})
    const [ post, setPost ] = useState()

    const getPost = async () => {
        const query = await API.get("forum_post", postId)
        setPost(query)
    }

    const getCommentaries = async () => {
        const list = await API.getCustom("forum_post", `post=${postId}`);
        setCommentaries(list)
    }

    useEffect(()=>{
        getPost()
        getCommentaries()
    },[])

    //TODO: formate the date

    return <>
        <div className="container">
            <h1>{post.title}</h1>
            <h5>POsted by: {post.created_by} in {post.created_at}</h5>
            <h4>{post.description}</h4>
        </div>
        <div>
            { commentaries.map((commentary) => <CommentaryBox commentary={commentary} key={commentary.id} />) }
        </div>
    </>
};

export default PostDetails;