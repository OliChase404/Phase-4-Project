import React, {useState, useEffect} from "react";
import {Card, Button, Image} from 'semantic-ui-react';

function InfluencerCampaignCard({influencerCampaign}) {


    return(
        <div>
        <Card>
            <Image src='https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
            <Card.Content>
            <Card.Header>{influencerCampaign.name}</Card.Header>
            <Card.Description>Here will be campaign text
                <br/>
                More text
                <br />
                More text
                <br />
                And more..
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Button color='purple' inverted>Go somewhere</Button>
            </Card.Content>
        </Card>
        </div>
    )
}

export default InfluencerCampaignCard;