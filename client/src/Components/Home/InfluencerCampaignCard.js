import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup} from "react-bootstrap";
import { Container, Divider } from 'semantic-ui-react'

function InfluencerCampaignCard({campaign, user}) {


    return(
        <div>
        <h1 style={{ marginTop: '20px' }}>Hello, {user.brand_name}</h1>
          <Container style={{ 
            textAlign: 'justified', 
            backgroundColor: '#f8f8f8', 
            padding: '20px', 
            borderRadius: '5px', 
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.3)' 
          }}>
            <b>Campaign Name:</b>{campaign.name}
            <Divider />
            <b>Product Category: </b> {campaign.product_category}
            <b>Target Revenue: </b>${campaign.target_revenue}
            <b>Target Views </b>{campaign.target_views}
          </Container>
        </div>
    )
}

export default InfluencerCampaignCard;