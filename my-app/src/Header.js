import React, { useState } from "react";
import './Header.css'; 
import Login from "./Login";
const Header = ()=>{
    const [IsLoginOpen, setLoginOpen] = useState(false);

    const HandleLogin=()=>{
        setLoginOpen(!IsLoginOpen);
    }

    return (
        <>
            <header>
                <section>
                    <div className="header-container"> 
                        <div className="header-text">
                            <span>To Do List</span>
                        </div>
                        <div className="login-container">
                            <button className="Login-btn" onClick={()=>HandleLogin()}>Login</button>
                            <a> + New List</a>
                        </div>
                    </div>
                </section> 
            </header>
            <Login show={IsLoginOpen} OnClose={HandleLogin}></Login>
        </>
    )
};

export default Header;