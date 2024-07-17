import { useState } from "react";
import "./random.css";

const RandomNumber = ()=>{
    const [random,setRandom] = useState(0);

    const RandomNumberGen=()=>{
        const randomNumber = Math.floor(Math.random() * 101);
        setRandom(randomNumber)
    }
    return(
        <div className="main-div">
            <div className="counter-div">
                <h1 className="heading1">Random Number</h1>
                <p className="p1">Generate a random number in the<br></br> range of 0 to 100</p>
                <button className="btn btn-primary" onClick={RandomNumberGen}>Generate</button>
                <p className="randomNumber">{random}</p>
            </div>
        </div>
    )
}

export default RandomNumber;