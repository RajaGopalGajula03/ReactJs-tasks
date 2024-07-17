import { useState } from "react";
import "./show.css";

const ShowHide = () =>{
    const[showFirstName,setShowFirstName] = useState(false);
    const[showLastName,setShowLastName] = useState(false);

    const handleFirstName = () => {
        setShowFirstName(!showFirstName);
    };

    const handleLastName = () => {
        setShowLastName(!showLastName);
    };

    
    return(
        <div className="main-div">
            <h1 className="heading1">Show/Hide</h1>
            <div className="buttonContainer">
                <button className="firstname" onClick={handleFirstName}>Show/Hide Firstname</button>
                <button className="lastname" onClick={handleLastName}>Show/Hide Lastname</button>
            </div>
            <div className="name-div">
                {showFirstName && <p className="name">Firstname: Raja Gopal</p>}
                {showLastName && <p className="name">Lastname: Gajula</p>}
            </div>
        </div>
    )
}

export default ShowHide;