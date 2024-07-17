
import { useState } from "react";
import "./even.css";


const EvenOdd = () =>{

    const [count,setCount] = useState(0);
    const [even,setEven] = useState(true);
    const handleCount =()=>{
        const randomCount =Math.floor(Math.random() * 101);
        console.log(randomCount);
        const newCount = count + randomCount;
        setCount(newCount);
       
        if(newCount%2 === 0)
        {
            setEven(true);
        }
        else{
            setEven(false);
        }
    }


    return(
        <div className="main-div">
            <h1 className="heading1">Count <span>{count}</span></h1>
            <p className="p1">{even?"Count is Even":"Count is Odd"}</p>
            <button className="btn" onClick={handleCount}>Increment</button>
            <p className="p2">*Increasse By Random Number Between 0 to 100</p>
        </div>
    )
}

export default EvenOdd;