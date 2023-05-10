import React, {useState, useEffect} from "react";
import InfluencerForm from "./InfluencerForm";
import BrandForm from "./BrandForm";



function CreateAccount() {
    const [isOn, setIsOn] = useState(false);
    const [switchForm, setSwitchForm] = useState(true);

    const handleClick1 = () => {
        setIsOn(!isOn)
    };

    const handleClick2 = () => {
        setSwitchForm(!switchForm)
    }


    return (
        <div className="CreateAccountForm">
        <h1 style={{paddingTop:"50px", paddingBottom:"50px", fontSize:"3.5rem"}}>SPHERE</h1>
        <button style={{backgroundColor: `${isOn ? '#D3D3D3' : '#808080'}`}} onClick={() => {handleClick1(), handleClick2()}}>
            Create an Influencer Account
        </button>
        <button style={!isOn ? { backgroundColor: '#D3D3D3'} : { backgroundColor: '#808080'}} onClick={() => {handleClick1(), handleClick2()}}>
            Create a Brand Account
        </button>
        {switchForm ? <InfluencerForm/> : <BrandForm/>}
        </div>
    )
}

export default CreateAccount;