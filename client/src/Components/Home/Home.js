import React, { useState, useEffect } from "react";
import {Card, Button} from "react-bootstrap"
import { ListGroup} from "react-bootstrap";
import { Container, Divider } from 'semantic-ui-react'
import InfluencerCampaignCard from "./InfluencerCampaignCard";
import BrandCampaignCard from "./BrandCampaignCard";
import CampaignCollection from "./CampaignCollection";


function Home({user, campaigns}) {

    return (
      <CampaignCollection user={user} campaigns={campaigns}/>
    )
  }




export default Home;
