import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Breadcrumbs from "./Navigation/Breadcrumbs";
const API_BASE = process.env.REACT_APP_API_BASE;

function Courses() {
  const { courseId } = useParams();
  const COURSES_API = `${API_BASE}/api/courses`;
  
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
        <Breadcrumbs/>
        <hr/>
        <CourseNavigation />
        <div className="pt-4"> 
            <div
                className="overflow-y-scroll position-fixed bottom-0 end-0"
                style={{ left: "320px", top: "70px" }} >
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                    <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                    <Route path="Grades" element={<h1>Grades</h1>} />
                    <Route path="People" element={<h1>People</h1>} />
                </Routes>
            </div>
        </div>
        </div>
        );
        }
        export default Courses;
