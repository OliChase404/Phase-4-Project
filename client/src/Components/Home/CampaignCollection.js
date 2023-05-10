import React from "react";
import InfluencerCampaignCard from "./InfluencerCampaignCard";
import BrandCampaignCard from "./BrandCampaignCard";



function CampaignCollection() {
    const [influencerCampaigns, setInfluencerCampaigns] = useState([]);
    const [brandCampaigns, setBrandCampaigns] = useState([]);

    useEffect(() => {
        fetch("/influencers/<int:id>/campaigns")
        .then(resp => resp.json())
        .then(setInfluencerCampaigns)
    }, [])

    useEffect(() => {
        fetch("/brands/<int:id>/campaigns")
        .then(resp => resp.json())
        .then(setBrandCampaigns)
    }, [])

    const influencerCampaignRender = influencerCampaigns.map((influencerCampaign) => {
        return <InfluencerCampaignCard influencerCampaign={influencerCampaign} key={influencerCampaign.id}/>
    })

    const brandCampaignRender = brandCampaigns.map((brandCampaign) => {
        return <BrandCampaignCard brandCampaign={brandCampaign} key={brandCampaign.id}/>
    })

    return (
        <Card.Group itemsPerRow={1}>
            <h1>Hello From Campaign Collection</h1>
            {influencerCampaignRender}
            {brandCampaignRender}
        </Card.Group>
    );
    }

export default CampaignCollection;