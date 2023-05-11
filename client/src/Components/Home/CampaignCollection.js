import React from "react";
import InfluencerCampaignCard from "./InfluencerCampaignCard";
import BrandCampaignCard from "./BrandCampaignCard";
import {Card, Button} from "react-bootstrap";



function CampaignCollection({influencerCampaigns, brandCampaigns}) {


    const influencerCampaignRender = influencerCampaigns.map((influencerCampaign) => {
        return <InfluencerCampaignCard influencerCampaign={influencerCampaign} key={influencerCampaign.id}/>
    })

    const brandCampaignRender = brandCampaigns.map((brandCampaign) => {
        return <BrandCampaignCard brandCampaign={brandCampaign} key={brandCampaign.id}/>
    })

    return (
    <div>
        <h1>Hello From Campaign Collection</h1>
        {/* <Card.Group itemsPerRow={1}> */}
            {influencerCampaignRender}
            {brandCampaignRender}
        {/* </Card.Group> */}
    </div>
    );
    }

export default CampaignCollection;