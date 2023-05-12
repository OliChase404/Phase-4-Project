import React, {useState, useEffect} from "react";
// import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import { Card, Icon } from 'semantic-ui-react'



function Performance() {

return(
    <div>
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            {/* <Card style={{ width: '40rem', height: '800px' }} className="mx-auto">
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
            </Card> */}
            <Card.Group itemsPerRow={3}>
             <Card
                image='https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                meta="User's social rank"
                description='Curious how you rank amongst other influencers?'
            />
             <Card
                image='https://images.unsplash.com/photo-1548328928-34db1c5fcc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                meta="User's Youtube page"
                description='Click to see your youtube performance'
            />
             <Card
                image='https://images.unsplash.com/photo-1616469829935-c2f33ebd89b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                meta="User's instagram"
                description='Click to see your instagram performance'
            />
        </Card.Group>
        </Container>
    </div>
    )
}

export default Performance;