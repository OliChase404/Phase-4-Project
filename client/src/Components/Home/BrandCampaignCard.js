import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BrandCampaignCard({brandCampaign}) {


    return(
        <div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{brandCampaign.name}</Card.Title>
            <Card.Text>
                Budget: {brandCampaign.budget}
                Category: {brandCampaign.product_category}
                Target Revenue: {brandCampaign.target_revenue}
                Target Views: {brandCampaign.target_views}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
    )
}

export default BrandCampaignCard;