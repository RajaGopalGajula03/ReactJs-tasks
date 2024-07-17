import { useState } from "react";
import "./login.css";


const LoginApp = () =>{

    const[isLogin,setIsLogin]=useState(false);

    const handleLogin = () =>{
        setIsLogin((prevState) => !prevState);
    }

    return(
        <div className="main-div">
            <h1 className="heading1">{isLogin?"Welcome User":"Please Login"}</h1>
            <button className="btn" onClick={handleLogin}>{isLogin?"Logout":"Login"}</button>
        </div>
    )
}

export default LoginApp;