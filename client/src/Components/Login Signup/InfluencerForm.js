import React, {useState, useEffect} from "react";
// import { Dropdown, Button, Form } from 'react-bootstrap';
import { Form, Button, Grid, Header, Segment, Dropdown} from "semantic-ui-react";
import { Navigate } from "react-router-dom";

import './Login.css';

function InfluencerForm({setUser}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [region, setRegion] = useState('')
    const [youtube, setYouTube] = useState('')
    const [instagram, setInstagram] = useState('')
    const [twitter, setTwitter] = useState('')
    const [selectedRegion, setSelectedRegion] = useState("Choose Your Region")
    const [regionsFromDb, setRegionsFromDb] = useState([])

    useEffect(() => {
        fetch('/regions')
        .then(resp => resp.json())
        .then(data => setRegionsFromDb(data))
    }, [])

    // const renderRegions = regionsFromDb.map((region, index) => (
    //     <Dropdown.Item key={region.id} href={`#/action-${index+1}`} onClick={(event) => handleDropDownMenu(event)}>
    //         {region.region}
    //     </Dropdown.Item>
    //     ));
          
    const handleDropDownMenu = (event) => {
        setRegion(event.target.innerText);
        setSelectedRegion(event.target.textContent);
    }

    const handleSubmit = async (event) => {
        event.preventDefault(event)
        if (password !== confirm) {
            alert("Passwords do not match")
            return
        }   

    let newInfluencer = {
        name: name,
        email: email,
        password: password,
        region: region,
        youtube: youtube,
        instagram: instagram,
        twitter: twitter
    }
    console.log(newInfluencer)

    const response = await fetch('/signupinfluencer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newInfluencer)
        })
        .then(resp => resp.json())
        .then(user => setUser(user)
        .then(<Navigate to="/" />))
    }


return (
    <>
    <div className="Login">
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header size="huge" textAlign="center" style={{marginTop: '50px', color: 'purple'}}>
              Create Your Account
            </Header>
            <Form
              className="signup-form"
              onSubmit={(event) => handleSubmit(event)}
              size="large"
            >
              <Segment stacked>
                <label>Influencer Full Name</label>
                <Form.Input
                  fluid
                  placeholder="Enter Full Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <br />

                <label>Email address</label>
                <Form.Input
                  fluid
                  placeholder="Enter Email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <br />

                <label>Enter password</label>    
                <Form.Input
                  fluid
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <br />

                <label>Confirm password</label>      
                <Form.Input
                  fluid
                  placeholder="Confirm Password"
                  type="password"
                  name="password"
                  value={confirm}
                  onChange={e => setConfirm(e.target.value)}
                />
                <br />

                <label>YouTube Account</label>
                <Form.Input
                  fluid
                  placeholder="Enter Youtube Account"
                  type="text"
                  name="youtube"
                  value={youtube}
                  onChange={e => setYouTube(e.target.value)}
                />
                <br />

                <label>Instagram Account</label>
                <Form.Input
                  fluid
                  placeholder="Enter Instagram Account"
                  type="text"
                  name="instagram"
                  value={instagram}
                  onChange={e => setInstagram(e.target.value)}
                />
                <br />

                <label>Twitter Account</label>
                <Form.Input
                  fluid
                  placeholder="Enter Twitter Account"
                  type="text"
                  name="twitter"
                  value={twitter}
                  onChange={e => setTwitter(e.target.value)}
                />
                <br />

                <Button color="purple" fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    {/* <div className="container">
        <Form onSubmit={(event) => handleSubmit(event)}> */}
    
    
        
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        
      
       
      
        
      
        {/* <Form.Label>Region</Form.Label>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedRegion}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {renderRegions}
            </Dropdown.Menu>
        </Dropdown> */}
        {/* <div style={{ marginTop: '20px' }}>
            <Button variant="secondary" type="submit">
            SignUp
            </Button>
        </div>
        </Form> */}
    {/* </div> */}
    </>
    );
      
}


export default InfluencerForm;