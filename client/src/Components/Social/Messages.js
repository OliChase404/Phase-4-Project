import React from "react";
import { Container, Header, Image } from 'semantic-ui-react'


function Messages() {
    return (
        <Container text>
            <Header as='h2' style={{padding: "20px"}}>Messages</Header>
            <p>You don't have any messages yet.</p>
            <Image src='https://images.unsplash.com/photo-1610539201003-f314c4825ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' size='medium' circular style={{margin: 'auto'}} />
        </Container>
    )
}

export default Messages;