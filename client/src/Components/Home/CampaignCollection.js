import React from "react";
import InfluencerCampaignCard from "./InfluencerCampaignCard";
import BrandCampaignCard from "./BrandCampaignCard";
import {Card, Button, Image, Header} from 'semantic-ui-react';

import './campaigns.css';


function CampaignCollection({influencerCampaigns, brandCampaigns}) {


    const influencerCampaignRender = influencerCampaigns.map((influencerCampaign) => {
        return <InfluencerCampaignCard influencerCampaign={influencerCampaign} key={influencerCampaign.id}/>
    })

    const brandCampaignRender = brandCampaigns.map((brandCampaign) => {
        return <BrandCampaignCard brandCampaign={brandCampaign} key={brandCampaign.id}/>
    })

    return (
    <div className="Campaigns">
        <Header as="h2">Your Campaign Collection</Header>
        <div className="Cards">
            {influencerCampaignRender}
            {brandCampaignRender}
        </div>
    </div>
    );
    }

export default CampaignCollection;