import React from "react";
import './footer.css'
import { RiFacebookBoxFill } from "react-icons/ri";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer=()=>{
    return(
        <footer>
            <div className="footer-content">
                <p>
                    &copy; 2025 Your E-learning Platform.All rights reserved.<br/>
                    Made with ❤️ <a href="">Suhani Goyal</a>
                </p>
                <div className="social-links">
                    <a href="">
                        <RiFacebookBoxFill/>
                    </a>
                    <a href="">
                        <AiFillTwitterSquare/>
                    </a>
                    <a href="">
                        <AiFillInstagram/>
                    </a>
                </div>
            </div>
        </footer>

    )
}
export default Footer;