import React, {useState, useEffect} from "react";
import InfluencerForm from "./InfluencerForm";
import BrandForm from "./BrandForm";



function CreateAccount() {
    const [influencerNotBrand, setInfluencerNotBrand] = useState(true);


    return (
        <div className="CreateAccountForm">
            <h1 style={{paddingTop:"50px", paddingBottom:"50px", fontSize:"3.5rem"}}>SPHERE</h1>
        </div>
    )
}

export default CreateAccount;