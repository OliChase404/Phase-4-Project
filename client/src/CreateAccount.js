import React, {useState, useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateAccount() {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };


    return (
        <div className="CreateAccountForm">
        <h1 style={{paddingTop:"50px", paddingBottom:"50px", fontSize:"3.5rem"}}>SPHERE</h1>
        <button style={{backgroundColor: `${isOn ? '#D3D3D3' : '#808080'}`}} onClick={handleClick}>
            Create an Influencer Account
        </button>
        <button style={!isOn ? { backgroundColor: '#D3D3D3'} : { backgroundColor: '#808080'}} onClick={handleClick}>
            Create a Brand Account
        </button>
        <InfluencerForm/>
        <BrandForm/>
        </div>
    )
}

export default CreateAccount;