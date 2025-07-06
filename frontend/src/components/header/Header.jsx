import React from 'react';
import "./header.css";
import {Link} from "react-router-dom";
import { MdOutlineCastForEducation } from "react-icons/md";


const Header = ({isAuth}) => {
    return(
        <header>
            <div className="logo">
                <h2 className="logo">
                    <MdOutlineCastForEducation style={{marginRight: "8px"}}/>
                    E-learning
                </h2>

            </div>

            <div className="link">
                <Link to={"/"}>Home</Link>
                <Link to={"/courses"}>Courses</Link>
                <Link to={"/about"}>About</Link>
                {isAuth ? (
                    <Link to={"/account"}>Account</Link>
                ):(
                    <Link to={"/login"}>Login</Link>
                )}


            </div>
        </header>
    )
}
export default Header;