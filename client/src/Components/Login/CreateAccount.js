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
        </div>
    )
}

export default CreateAccount;