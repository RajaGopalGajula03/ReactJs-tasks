
import "./speed.css";
import { useState } from "react";


const SpeedoMeter =()=>{
    const[speed,setSpeed] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    const IncreaseSpeed =()=>{
        if(speed >= 200)
        {
            setSpeed(200);
            setErrorMessage("Speed is already 200mph");
            return;
        }
        setSpeed((prevSpeed)=> prevSpeed + 10);
        setErrorMessage("");
    }

    const DecreaseSpeed =()=>{
        if(speed <=0)
        {
            setSpeed(0);
            setErrorMessage("Speed is Already 0mph");
            return;
        }
        setSpeed((prevSpeed)=> prevSpeed - 10);
        setErrorMessage("");
    }

    return(
        <div className="speed-div">
            <h1 className="heading1">SPEEDOMETER</h1>
            <img className="speedImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPJ8-ilOBTzMEu4Fe6Nn5Z7vwBNOUpy3DFg&s" alt="speedometer"></img>
            <h2 className="heading2">Speed is <span>{speed}</span>mph</h2>
            <p className="p2">Min Limit is 0mph, Max Limit is 200mph</p>
            <p className="error-message">{errorMessage}</p>
            <div className="button-div">
                <button className="accelerate btn" onClick={IncreaseSpeed}>Accelerate</button>
                <button className="brake btn" onClick={DecreaseSpeed}>Apply Brake</button>
            </div>
        </div>
    )
}

export default SpeedoMeter;