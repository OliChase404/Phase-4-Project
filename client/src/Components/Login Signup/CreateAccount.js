import React, {useState, useEffect} from "react";
import InfluencerForm from "./InfluencerForm";
import BrandForm from "./BrandForm";
import { Button } from "semantic-ui-react";

import './Login.css'

function CreateAccount({setUser, setLoginNotSignup}) {
    const [influencerNotBrand, setInfluencerNotBrand] = useState(true);


    return (
        <div className="CreateAccountForm">
            <Button color="purple" inverted fluid size="large" style={{width: '200px', height: '70px'}} onClick={() => setInfluencerNotBrand(prev => !prev)}>{influencerNotBrand ? 'Signup as a Brand' : 'Signup as an Influencer'}</Button>
            <Button color="purple" inverted fluid size="large" style={{width: '200px', height: '70px'}}  onClick={() => setLoginNotSignup(prev => !prev)}>Return to Login</Button>
            {influencerNotBrand ? <InfluencerForm setUser={setUser}/> : <BrandForm setUser={setUser}/>}
        </div>
    )
}

export default CreateAccount;