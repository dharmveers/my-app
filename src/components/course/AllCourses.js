import React, { useState ,useEffect} from "react";
import { toast } from "react-toastify";
import Course from "./Course";

import axios from "axios"; 

const AllCourses=()=>{
    const [course,setCourse]=useState([])
    
    useEffect(()=>{
        axios.get('/getCourses').then(
            (response)=>{
            toast.success('courses loaded successfully');
            setCourse(response.data);
            },
            (error)=>{
                toast.error("service unavailable");
            });
        document.title="All Courses";    
    },[]); /* first time only hooked */

    return (
        <div className="view-Courses"> 
            <h1 className="text-center">All Courses Here</h1>
        {
            course.length > 0 ?course.map((item)=> <Course key={item.id} course={item}/>)
            :"No courses Available"

        }
        </div>
    );
}

export default AllCourses;