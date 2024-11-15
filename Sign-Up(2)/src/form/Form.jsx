import "./Form.css";
import React, { useState } from "react";

export default function Form(){

    const[action,setAction]=useState("Sign Up")
    return(
        <>
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>

            </div>
            <div className="inputs">
                {action==="Login"?<div/>:<div className="input">
                    <i class="ri-user-line"></i>
                    <input type="name" placeholder="Full Name"/>
                </div>}

                <div className="input">
                    <i class="ri-mail-line"></i>
                    <input type="email" placeholder="xyz@gmail.com"/>
                </div>

                <div className="input">
                    <i class="ri-lock-line"></i>
                    <input type="password" placeholder="password"/>
                </div>
            </div>
            
            {action==="Sign Up"?<div/>: <div className="forget-password">Lost Password? <span>Click Here</span></div>}
           
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
        
        </>
    )
}