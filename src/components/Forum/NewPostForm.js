import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import { Button, Form, Input, FormGroup } from 'reactstrap';


// Login Working
const NewPostForm = props => {

    const title = useRef()
    const content = useRef()

    const handlePost = () => {

    }

    return (
        <main style={{textAlign:"center"}}>
            <Form className="form--login" onSubmit={handlePost}>
                <h1 className="h3 mb-3 font-weight-normal">New Forum Post</h1>
                <fieldset>
                    <label htmlFor="inputTitle"> Title </label>
                    <Input ref={title} type="text"
                        className="form-control"
                        placeholder="Email"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputContent"> Content </label>
                    <Input ref={content} type="text"
                        id="password"
                        className="form-control"
                        placeholder="Content"
                        required />
                </fieldset>
                <fieldset>
                    <Button type="submit">
                        Post
                    </Button>
                </fieldset>
            </Form>
        </main>
    )
}

export default NewPostForm