import React, {useState, useEffect} from "react";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import { Card, Icon } from 'semantic-ui-react'

const extra = (
    <a>
      <Icon name='user' />
      2561 followers
    </a>
  )
  

function Profile() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("/influencers/3/campaigns")
        .then(resp => resp.json())
        .then(data => {
          setUser(data[0].name)
        })
      }, [])

return(
    <div>
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Card
            image='https://images.unsplash.com/photo-1603217039863-aa0c865404f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
            header={user}
            meta='Cool chick'
            description={user + 'is a fashion blogger living in Nashville who enjoys bubble tea and hanging out with her corgies.'}
            extra={extra}
        />
            
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
        </Container>
    </div>
    )
}

export default Profile;