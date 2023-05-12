import React, {useState, useEffect} from "react";
import {Card, Button, Image,} from 'semantic-ui-react';

function BrandCampaignCard({brandCampaign}) {


    return(
        <div>
             <Card>
            <Image src='https://images.unsplash.com/photo-1531329466522-1075f0e4f23a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' />
            <Card.Content>
            <Card.Header>{brandCampaign.name}</Card.Header>
            <Card.Description>
                Budget: {brandCampaign.budget}
                <br/>
                Category: {brandCampaign.product_category}
                <br />
                Target Revenue: {brandCampaign.target_revenue}
                <br />
                Target Views: {brandCampaign.target_views}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Button color='purple' inverted>Go somewhere</Button>
            </Card.Content>
        </Card>
        </div>
    )
}

export default BrandCampaignCard;