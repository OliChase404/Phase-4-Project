import React, {useState, useEffect} from "react"
import {Link, Navigate} from "react-router-dom"
import {
  Form,
  Grid,
  Button,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

import './Login.css';


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
      <div className="Login">
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header size="huge" textAlign="center" style={{marginTop: '50px', color: 'purple'}}>
            Log-in to your SPHERE
          </Header>
          <Form
            className="login-form"
            onSubmit={(e) => handleSubmit(e)}
            size="large"
            >
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                type="text"
                name="email"
                placeholder="E-mail address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <br />

              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <br />
              <Button color="purple" fluid size="large" type="submit">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a onClick={() => setLoginNotSignup(prev => !prev)} style={{color: 'blue', textDecoration: 'underline'}}>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
        );
    }


export default Login;