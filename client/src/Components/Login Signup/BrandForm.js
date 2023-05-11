import React, {useState, useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        <div className="container">
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="name" placeholder="Enter brand name" value={name} onChange={e => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Label>Region</Form.Label>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedRegion}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Menu>
                    {renderRegions}
                </Dropdown.Menu>
                </Dropdown.Menu>
            </Dropdown>
            <div style={{ marginTop: '20px' }}>
            <Button variant="secondary" type="submit">
                Create Account
            </Button>
            </div>
            </Form>
        </div>
    )
}

export default BrandForm;