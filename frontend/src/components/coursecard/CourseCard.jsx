import React from 'react'
import "./CourseCard.css"
import {server} from "../../main.jsx";
import {UserData} from "../../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";

const CourseCard = ({course}) => {
    const navigate = useNavigate();
    const{user,isAuth}=UserData()
    return(
        <div className="course-card">
            <img src={`${server}/${course.image}`} alt="" className="course-image"/>
            <h3>{course.title}</h3>
            <p>Instructor-{course.createdBy}</p>
            <p>Duration- {course.duration}</p>
            <p>Price- ₹{course.price}</p>
            {
                isAuth? (
                    <>
                        {user && user.role !== "admin"? (
                            <>
                                {
                                    user.subscription.includes(course._id)? (<button
                                        onClick={() => navigate(`/course/study/${course._id}`)}
                                        className="common-btn">
                                        Study</button>
                                    ): (
                                        <button onClick={() => navigate(`/course/${course._id}`)}
                                                className="common-btn">
                                            Get Started</button>
                                    )
                                }
                            </>
                        ) : (
                            <button onClick={() => navigate(`/course/study/${course._id}`)}
                                    className="common-btn">Study
                            </button>
                        )}
                        <br/>
                        {
                            user && user.role !== "admin" && <button className="common-btn" style={{background:"brown"}}>Delete</button>
                        }
                    </>

                ) : (
                    <button onClick={() => navigate("/login")}
                            className="common-btn">
                        Get Started</button>
                )
            }

        </div>
    )
}
export default CourseCard;