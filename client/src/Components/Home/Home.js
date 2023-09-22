import React, { useState, useEffect } from "react";
import {Card, Button} from "react-bootstrap"
import { ListGroup} from "react-bootstrap";
import { Container, Divider } from 'semantic-ui-react'
import InfluencerCampaignCard from "./InfluencerCampaignCard";
import BrandCampaignCard from "./BrandCampaignCard";
import CampaignCollection from "./CampaignCollection";


function Home({user, campaigns}) {

  console.log("user", user)
  console.log("campaigns", campaigns)

    return (
      <div>
        <h1 style={{ marginTop: '20px' }}>Hello, {user.name ? user.name : user.brand_name}</h1>
        <CampaignCollection user={user} campaigns={campaigns}/>
      </div>
    )
  }




export default Home;
