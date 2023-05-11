import React, {useState, useEffect} from "react";
import { Dropdown, Button, Form } from 'react-bootstrap';

function InfluencerForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [region, setRegion] = useState('')
    const [selectedRegion, setSelectedRegion] = useState("Choose Your Region")
    const [regionsFromDb, setRegionsFromDb] = useState([])



    const handleDropDownMenu = (event) => {
        setRegion(event.target.innerText);
        setSelectedRegion(event.target.textContent);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

    let newInfluencer = {
        name: name,
        email: email,
        password: password,
        region: region
    }

    const response = await fetch('http://127.0.0.1:5555', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newInfluencer)
        })
        // .then(resp => resp.json())
    };


    return (
        <div className="container">
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Influencer Full Name</Form.Label>
            <Form.Control value={name} onChange={e => setName(e.target.value)} type="name" placeholder="Enter full name" />
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
                <Dropdown.Item href="#/action-1" onClick={handleDropDownMenu}>Bangladesh</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={handleDropDownMenu}>Brazil</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={handleDropDownMenu}>China</Dropdown.Item>
                <Dropdown.Item href="#/action-4" onClick={handleDropDownMenu}>Congo</Dropdown.Item>
                <Dropdown.Item href="#/action-5" onClick={handleDropDownMenu}>Egypt</Dropdown.Item>
                <Dropdown.Item href="#/action-6" onClick={handleDropDownMenu}>Ethiopia</Dropdown.Item>
                <Dropdown.Item href="#/action-7" onClick={handleDropDownMenu}>France</Dropdown.Item>
                <Dropdown.Item href="#/action-8" onClick={handleDropDownMenu}>Germany</Dropdown.Item>
                <Dropdown.Item href="#/action-9" onClick={handleDropDownMenu}>Italy</Dropdown.Item>
                <Dropdown.Item href="#/action-10" onClick={handleDropDownMenu}>India</Dropdown.Item>
                <Dropdown.Item href="#/action-11"onClick={handleDropDownMenu} >Indonesia</Dropdown.Item>
                <Dropdown.Item href="#/action-12" onClick={handleDropDownMenu}>Iran</Dropdown.Item>
                <Dropdown.Item href="#/action-13" onClick={handleDropDownMenu}>Japan</Dropdown.Item>
                <Dropdown.Item href="#/action-14" onClick={handleDropDownMenu}>Mexico</Dropdown.Item>
                <Dropdown.Item href="#/action-15" onClick={handleDropDownMenu}>Nigeria</Dropdown.Item>
                <Dropdown.Item href="#/action-16" onClick={handleDropDownMenu}>Pakistan</Dropdown.Item>
                <Dropdown.Item href="#/action-17" onClick={handleDropDownMenu}>Phillippines</Dropdown.Item>
                <Dropdown.Item href="#/action-18" onClick={handleDropDownMenu}>Russia</Dropdown.Item>
                <Dropdown.Item href="#/action-19" onClick={handleDropDownMenu}>South Africa</Dropdown.Item>
                <Dropdown.Item href="#/action-20" onClick={handleDropDownMenu}>Tanzania</Dropdown.Item>
                <Dropdown.Item href="#/action-21" onClick={handleDropDownMenu}>Thailand</Dropdown.Item>
                <Dropdown.Item href="#/action-22" onClick={handleDropDownMenu}>Turkey</Dropdown.Item>
                <Dropdown.Item href="#/action-23" onClick={handleDropDownMenu}>United Kingdom</Dropdown.Item>
                <Dropdown.Item href="#/action-24" onClick={handleDropDownMenu}>United States</Dropdown.Item>
                <Dropdown.Item href="#/action-25" onClick={handleDropDownMenu}>Vietnam</Dropdown.Item>
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

// Refactor the dropdown menu:
// allCountries = ["country1", "country2", "country3"]
// const renderCountries = () => {
//     let i = 0
//     allCountries.map(country => {
//         i++
//         return <li>`${country}{i}`</li>
//     })
// }

export default InfluencerForm;