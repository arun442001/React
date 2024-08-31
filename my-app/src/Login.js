import React, { useState } from "react";
import "./Login.css"

const Login = ({show, OnClose})=>{
    
    return (show &&
        <div className="login-wrapper">
            <button className="close-btn" onClick={OnClose}>X</button>
            <h1>Sign In</h1>
            <p>
                <span>New User?</span>
                <a>
                    Create Account
                </a>
            </p>
            <label>Email Address</label><br/>
            <input></input><br/>
            <button className="continue-btn">Continue</button>
        </div>
    )
}

export default Login;