import React, { useState, useEffect } from "react";
import {Card, Button} from "react-bootstrap"
import CampaignCollection from "./CampaignCollection";

function Home() {
  const [influencerCampaigns, setInfluencerCampaigns] = useState([]);
  const [brandCampaigns, setBrandCampaigns] = useState([]);

  useEffect(() => {
    fetch("/influencers/3/campaigns")
    .then(resp => resp.json())
    .then(data => setInfluencerCampaigns(data))
  }, [])

  useEffect(() => {
    fetch("/brands/5/campaigns")
    .then(resp => resp.json())
    .then(data => setBrandCampaigns(data))
    }, [])

  return (
  <div>
    <h1>Welcome, User!</h1>
    <CampaignCollection influencerCampaigns={influencerCampaigns} brandCampaigns={brandCampaigns}/>
  </div>
  );
}

export default Home;
