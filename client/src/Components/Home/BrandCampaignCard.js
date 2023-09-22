import React, {useState, useEffect} from "react";
import { Card } from 'semantic-ui-react'

function BrandCampaignCard({campaign, user}) {



    return(
        <div>
          <Card.Group>
            <Card fluid color='black' header= {'Campaign Name: ' + campaign.name} />
            <Card fluid color='black' header= {'Product Category: ' + campaign.product_category} />
            <Card fluid color='black' header= {'Budget: ' + campaign.budget} />
            <Card fluid color='black' header= {'Target Revenue: ' + campaign.target_revenue} />
            <Card fluid color='black' header= {'Target Views: ' + campaign.target_views} />
          </Card.Group>
        </div>
    )
}

export default BrandCampaignCard;