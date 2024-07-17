import { useState } from "react";
import "./fruits.css";

const FruitsContainer = ()=>{

    const[magoCount,setMangoCount]=useState(0);
    const[bananaCount,setBananaCount]=useState(0);

    const IncreaseMango =()=>{
        setMangoCount((prevMango)=> prevMango + 1);
       
    }
    
    const IncreaseBanana=()=>{
        setBananaCount((prevBanana) => prevBanana +1);
    }

    return(
        <div className="main-div">
            <div className="fruits-div">
                <h1>Bob ate <span className="mangoCount">{magoCount}</span> mangoes <span className="bananaCount">{bananaCount}</span> bananas</h1>
                <div className="fruitImages">
                    <div className="mangoImage">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmPOOHOKlKf2gA_ouf_7phpgkifVITRovgw&s" alt="mango"></img>
                        <button className="mangoButton" onClick={IncreaseMango}>Eat mango</button>
                    </div>
                    <div className="bananaImage">
                        <img className="banana" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznsjD7cccJQfA74RK5RFl8Fw0c8MQKxBFiQ&s" alt="banana"></img>
                        <button className="bananaButton" onClick={IncreaseBanana}>Eat Banana</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FruitsContainer;