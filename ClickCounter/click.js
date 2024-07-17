import { useState } from "react";
import "./click.css";

const ClickCounter = ()=>{
    const [count,setCount] = useState(0);

    const CounterClick=()=>{
        setCount((prevCount)=>prevCount+1)
    }
    return(
        <div className="main-div">
            <div className="counter-div">
                <h1 className="heading1">The Button has been clicked<br></br> <span className="counter">{count}</span> times</h1>
                <p className="p1">Click the button to increase the count!</p>
                <button className="btn btn-primary" onClick={CounterClick}>Click Me!</button>
            </div>
        </div>
    )
}

export default ClickCounter;