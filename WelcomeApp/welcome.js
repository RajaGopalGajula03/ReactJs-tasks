import { useState } from "react";
import "./welcome.css";

const SubscribeButton=()=>{

    const[subscribed,setSubscribed]=useState(false);
    const[buttontext,setButtontext] = useState("Subscribe");

    const handleSbcribe =()=>{
        if(subscribed === false)
        {
            setSubscribed(true);
            setButtontext("Subscribed");
        }
        else{
            setSubscribed(false);
            setButtontext("Subscribe");
        }
    }

    return(
        <div className="main-div">
            <h1 className="heading1">Welcome</h1>
            <p className="p1">Thank you! Happy Learning</p>
            <button className="btn" onClick={handleSbcribe}>{buttontext}</button>
        </div>
    )
}

export default SubscribeButton;