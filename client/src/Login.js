import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

    let credentials = {
        email: email,
        password: password
    }

    const response = await fetch('http://127.0.0.1:5555', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
    };


    return (
    <div>
        <h1 style={{paddingTop:"50px", paddingBottom:"50px", fontSize:"3.5rem"}}>SPHERE</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Link to='/home'>
            <Button variant="primary" type="submit">
                Login
            </Button>
            </Link>
                &nbsp;
            <Link to='/createaccount'>
                <Button variant="secondary" type="button">
                    Create Account
                </Button>
            </Link>
        </Form>
    </div>
        );
    }

export default Login;