import React from "react"
import "./DashBoard.css";
import {CourseData} from "../../context/CourseContext.jsx";
import CourseCard from "../../components/coursecard/CourseCard.jsx";

const DashBoard=()=>{
    const {myCourses}=CourseData();
    return(
        <div className="student-dashboard">
            <h2>All Enrolled Courses</h2>
            <div className="dashboard-content">
                {
                    myCourses && myCourses.length > 0 ? (
                        myCourses.map((e)=> <CourseCard key={e.id} course={e}/>)
                    ) :(
                        <p>No Course Enrolled Yet</p>
                    )
                }
            </div>

        </div>
    )
};

export default DashBoard;