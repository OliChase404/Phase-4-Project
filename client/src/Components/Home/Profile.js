import React, { useState, useEffect } from "react";
import { Card, Container, ListGroup, Button } from "react-bootstrap";
import { UserContext } from "../App";


function Profile() {
  const { user, setUser } = React.useContext(UserContext);
  // Hello

  return Object.hasOwn(user, "youtube") ? (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", marginTop: "50px" }}
      >
        <Card
          style={{ width: "40rem", height: "800px" }}
          className="mx-auto position-relative"
        >
          <Button className="position-absolute top-0 end-0 m-3">
            Change Image
          </Button>
          <Card.Img
            variant="top"
            src={user.image}
            style={{ width: "400px", height: "400px" }}
            className="mx-auto d-block"
          />
          <Card.Body>
            <Card.Title>
              <h1 style={{ marginBottom: 0 }}>{user.name}</h1>
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <b>Email:</b> {user.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Youtube Link: </b>
              <Card.Link href="#">{user.youtube}</Card.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Influencer Rank:</b> {user.rank}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Influencer Region: </b>
              {/* {user.influencer_regions[0].region.region} */}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body></Card.Body>
        </Card>
      </Container>
    </div>
  ) : (
  <div>
  <Container
    className="d-flex justify-content-center align-items-center"
    style={{ height: "100vh", marginTop: "50px" }}
  >
    <Card
      style={{ width: "40rem", height: "800px" }}
      className="mx-auto position-relative"
    >
      <Button className="position-absolute top-0 end-0 m-3">
        Change Image
      </Button>
      <Card.Img
        variant="top"
        src={user.image}
        style={{ width: "400px", height: "400px" }}
        className="mx-auto d-block"
      />
      <Card.Body>
        <Card.Title>
          <h1 style={{ marginBottom: 0 }}>{user.brand_name}</h1>
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <b>Email:</b> {user.email}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Brand Region: </b>
          {user.brand_regions[0].region.region}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body></Card.Body>
    </Card>
  </Container>
</div>
)
}

export default Profile;
