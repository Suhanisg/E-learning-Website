import React from "react";
import { MdDashboard } from "react-icons/md";
import "./Account.css";
const Account = () => {
    return (
        <div className="profile">
            <h2>My Profile</h2>
            <div className="profile-info">
                <p>
                    <strong>Name-Suhani Goyal</strong>
                </p>

                <p>
                    <strong>Email-suhugoya@gmail.com</strong>
                </p>
                <button className="common-btn"><MdDashboard/>Dashboard</button>
            </div>
        </div>
    )
}
export default Account;
