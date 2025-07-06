import React from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';
import Testimonials from "../../components/testimonials/Testimonials.jsx";
import video from "../../assets/video.mp4";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="home">
                {/* ✅ Video Background */}
                <video autoPlay loop muted playsInline className="bg-video">
                    <source src={video} type="video/mp4"/>
                </video>

                {/* ✅ Content Over Video */}
                <div className="home-content">
                    <h1>Welcome to our E-learning Platform</h1>
                    <p>Learn, Grow, Excel</p>
                    <button onClick={() => navigate("/courses")} className="common-btn">
                        Get started
                    </button>
                </div>
            </div>

            <Testimonials/>
        </div>
    );
};

export default Home;
