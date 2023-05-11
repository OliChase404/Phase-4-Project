import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

function Performance() {

return(
    <div>
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: '40rem', height: '800px' }} className="mx-auto">
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                <Card.Title>Insert User's Name</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Insert User's Email</ListGroup.Item>
                <ListGroup.Item>Insert User's Youtube Page</ListGroup.Item>
                <ListGroup.Item>Insert User's Social's Rank</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <Card.Link href="#">Link to Youtube</Card.Link>
                <Card.Link href="#">Insert Another Social Link</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    </div>
    )
}

export default Performance;