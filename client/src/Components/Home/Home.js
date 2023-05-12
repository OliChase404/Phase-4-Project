import React, { useState, useEffect } from "react";
import {Card, Button} from "react-bootstrap"
import CampaignCollection from "./CampaignCollection";

function Home({user}) {
  const [influencerCampaigns, setInfluencerCampaigns] = useState([]);
  const [brandCampaigns, setBrandCampaigns] = useState([]);
  // const [user, setUser] = useState([])
 

  useEffect(() => {
    fetch("/influencers/3/campaigns")
    .then(resp => resp.json())
    .then(data => {
      setInfluencerCampaigns(data)
    })
  }, [])

  useEffect(() => {
    fetch("/brands/5/campaigns")
    .then(resp => resp.json())
    .then(data => setBrandCampaigns(data))
    }, [])

    const displayUser = user === [] ? 'User!' : user.name

  return (
  <div style={{margin: "20px"}}>
    <h1>Welcome, {displayUser}</h1>
    <img src="https://images.unsplash.com/photo-1613053341085-db794820ce43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
    <CampaignCollection influencerCampaigns={influencerCampaigns} brandCampaigns={brandCampaigns}/>
  </div>
  );
}

export default Home;
