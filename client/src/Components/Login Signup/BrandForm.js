import React, {useState, useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Form, Button, Grid, Header, Segment} from "semantic-ui-react";

function BrandForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [region, setRegion] = useState('')
    const [selectedRegion, setSelectedRegion] = useState("Choose your Region")
    const [regionsFromDb, setRegionsFromDb] = useState([])

    useEffect(() => {
        fetch('/regions')
        .then(resp => resp.json())
        .then(data => setRegionsFromDb(data))
    }, [])

    const renderRegions = regionsFromDb.map((region, index) => (
        <Dropdown.Item key={region.id} href={`#/action-${index+1}`} onClick={(event) => handleDropDownMenu(event)}>
            {region.region}
        </Dropdown.Item>
        ));

    const handleDropDownMenu = (event) => {
        setRegion(event.target.innerText);
        setSelectedRegion(event.target.textContent);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
    let newBrand = {
        name: name,
        email: email,
        password: password,
        region: region
        }

    const response = await fetch('/brands', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBrand)
        })
        // .then(resp => resp.json())
    };

    return (
        <div className="Login">
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header size="huge" textAlign="center" style={{marginTop: '50px', color: 'purple'}}>
              Create Your Account
            </Header>
            <Form
              className="brand-form"
              onSubmit={handleSubmit}
              size="large"
            >
              <Segment stacked>
                <label>Brand Name</label>
                <Form.Input
                  fluid
                  placeholder="Enter Brand Name"
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

                {/* <Dropdown
                    placeholder='Region'
                    fluid
                    multiple
                    search
                    selection
                    options={renderRegions}
                    onChange={selectedRegion}
                />
                <br /> */}

                <Button color="purple" fluid size="large">
                  Create Account
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>

            
           
            // {/* <Form.Label>Region</Form.Label> */}
            // {/* <Dropdown>
            //     <Dropdown.Toggle variant="success" id="dropdown-basic">
            //         {selectedRegion}
            //     </Dropdown.Toggle>

            //     <Dropdown.Menu>
            //     <Dropdown.Menu>
            //         {renderRegions}
            //     </Dropdown.Menu>
            //     </Dropdown.Menu>
            // </Dropdown> */}
    )
}

export default BrandForm;