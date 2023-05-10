import React, {useState, useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BrandForm() {


    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control type="name" placeholder="Enter brand name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Label>Region</Form.Label>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Choose your Region
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Bangladesh</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Brazil</Dropdown.Item>
                <Dropdown.Item href="#/action-3">China</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Congo</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Egypt</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Ethiopia</Dropdown.Item>
                <Dropdown.Item href="#/action-7">France</Dropdown.Item>
                <Dropdown.Item href="#/action-8">Germany</Dropdown.Item>
                <Dropdown.Item href="#/action-9">Italy</Dropdown.Item>
                <Dropdown.Item href="#/action-10">India</Dropdown.Item>
                <Dropdown.Item href="#/action-11">Indonesia</Dropdown.Item>
                <Dropdown.Item href="#/action-12">Iran</Dropdown.Item>
                <Dropdown.Item href="#/action-13">Japan</Dropdown.Item>
                <Dropdown.Item href="#/action-14">Mexico</Dropdown.Item>
                <Dropdown.Item href="#/action-15">Nigeria</Dropdown.Item>
                <Dropdown.Item href="#/action-16">Pakistan</Dropdown.Item>
                <Dropdown.Item href="#/action-17">Phillippines</Dropdown.Item>
                <Dropdown.Item href="#/action-18">Russia</Dropdown.Item>
                <Dropdown.Item href="#/action-19">South Africa</Dropdown.Item>
                <Dropdown.Item href="#/action-20">Tanzania</Dropdown.Item>
                <Dropdown.Item href="#/action-21">Thailand</Dropdown.Item>
                <Dropdown.Item href="#/action-22">Turkey</Dropdown.Item>
                <Dropdown.Item href="#/action-23">United Kingdom</Dropdown.Item>
                <Dropdown.Item href="#/action-24">United States</Dropdown.Item>
                <Dropdown.Item href="#/action-25">Vietnam</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <div style={{ marginTop: '20px' }}>
        <Button variant="secondary" type="submit">
            Create Account
        </Button>
        </div>
        </Form>
    )
}

export default InfluencerForm;