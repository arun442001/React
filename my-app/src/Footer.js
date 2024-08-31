import React from "react";
import './Footer.css';

const Footer = ()=>{
    const NewDate = new Date();
    return(
        <footer>
            <div>
                Copyright &copy; {NewDate.getFullYear()}
            </div>
            <div className="footer-nav">
                <a>About</a>
                <a>Terms</a>
                <a>Suggest a Feature</a>
            </div>
        </footer>
    )
}

export default Footer;