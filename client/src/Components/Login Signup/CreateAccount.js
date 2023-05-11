import React, {useState, useEffect} from "react"
import InfluencerForm from "./InfluencerForm"
import BrandForm from "./BrandForm"



function CreateAccount({setUser, setLoginNotSignup}) {
    const [influencerNotBrand, setInfluencerNotBrand] = useState(true);


    return (
        <div className="CreateAccountForm">
            <button onClick={() => setInfluencerNotBrand(prev => !prev)}>{influencerNotBrand ? 'Signup as a Brand' : 'Signup as an Influencer'}</button>
            <br/>
            <button onClick={() => setLoginNotSignup(prev => !prev)}>Return to Login</button>
            {influencerNotBrand ? <InfluencerForm setUser={setUser}/> : <BrandForm setUser={setUser}/>}
        </div>
    )
}

export default CreateAccount