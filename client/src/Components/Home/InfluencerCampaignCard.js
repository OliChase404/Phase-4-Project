import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InfluencerCampaignCard({influencerCampaign}) {


    return(
        <div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{influencerCampaign.name}</Card.Title>
            <Card.Text>
                {}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
    )
}

export default InfluencerCampaignCard;