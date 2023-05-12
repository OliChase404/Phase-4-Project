import React, { useState, useEffect } from "react";
import {Card, Button} from "react-bootstrap"
import { ListGroup} from "react-bootstrap";
import { Container, Divider } from 'semantic-ui-react'
import InfluencerCampaignCard from "./InfluencerCampaignCard";
import BrandCampaignCard from "./BrandCampaignCard";


function CampaignCollection({user, campaigns}) {
    const renderCampaigns = campaigns.map((campaign) => 
            Object.hasOwn(user, "youtube") 
            ? <InfluencerCampaignCard campaign={campaign} key={campaign.id} user={user}/> 
            : <BrandCampaignCard campaign={campaign} key={campaign.id} user={user}/>
        );

    return (
        <div>
            {renderCampaigns}
        </div>
    )

}


export default CampaignCollection;