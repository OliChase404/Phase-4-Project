import React, {useState, useEffect} from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link, Navigate} from "react-router-dom"


function Login({ setUser, setLoginNotSignup }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    
    function handleSubmit(e) {
      e.preventDefault()
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
          .then(<Navigate to="/" />)
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
    }


    return (
    <div>
        <h1 style={{paddingTop:"50px", paddingBottom:"50px", fontSize:"3.5rem"}}>SPHERE</h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
                &nbsp;
                <Button onClick={() => setLoginNotSignup(prev => !prev)} variant="secondary" type="button">
                    Create Account
                </Button>
        </Form>
    </div>
        );
    }


export default Login;