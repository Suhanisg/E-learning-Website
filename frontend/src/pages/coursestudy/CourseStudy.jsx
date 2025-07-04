import React, {useEffect} from "react"
import "./CourseStudy.css";
import {useParams} from "react-router-dom";
import {CourseData} from "../../context/CourseContext.jsx";

const CourseStudy=()=>{
    const params=useParams()

    const {fetchCourse}=CourseData();

    useEffect(() => {
        fetchCourse(params.id);
    }, []);
    return(
        <div>CourseStudy</div>
    )
}
export default CourseStudy;