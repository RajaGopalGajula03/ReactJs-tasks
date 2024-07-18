import { useState } from "react";
import "./Capital.css";

const Capital = (props) =>{

    const{capitalList}=props;

    const [capitals,setCapitals]=useState(capitalList[0])

    const handleCapitalChange=(event)=>{
        const selectedCapital = capitalList.find((capital)=>capital.capitalDisplayTest === event.target.value);
        setCapitals(selectedCapital);
    }


    return(
        <div className="main-div">
            <div className="capital-div">
                <h1 className="heading1">Countries And Capitals</h1>
                <div className="select-div">
                    <div>
                    <select onChange={handleCapitalChange} value={capitalList.capitalDisplayTest} className="selectCapital">
                    {capitalList.map((capital)=>(
                        <option key={()=>capital.id}>{capital.capitalDisplayTest}</option>
                    ))}
                    </select>
                    </div>
                    <div>
                    <p className="p2">Is capital of which country?</p>
                    </div>
                </div>
                <p className="countryText">{capitals.country}</p>
            </div>
        </div>
    )
}

export default Capital;