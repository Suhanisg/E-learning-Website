import React from "react";
import "./Courses.css";
import {CourseData} from "../../context/CourseContext.jsx"
import CourseCard from "../../components/coursecard/CourseCard.jsx";

const Courses=()=>{
    const {courses} =CourseData()
    console.log(courses)
    return (
        <div className="courses">
            <h2>Available Courses</h2>
            <div className="course-container">
                {
                    courses && courses.length> 0 ? courses.map((e)=>(
                      <CourseCard key={e._id} course={e}/>
                    )):<p>No Courses Yet! </p>
                }
            </div>

        </div>
    )
}
export default Courses