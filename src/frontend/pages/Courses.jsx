import React from 'react'
import CourseAll from '../components/courses/CourseAll'
import { Header } from '../components/courses/Header'

/**
* @author
* @function Coureses
**/

const Courses = () => {
  return(
    <div className="bg-white ">
        <Header />
        
        <CourseAll />
    
    </div>
   )
}

export default Courses
