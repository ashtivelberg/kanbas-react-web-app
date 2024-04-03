import { Navigate, Route, Routes} from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const COURSES_API = `${API_BASE}/api/courses`;
  const updateCourse = async () => {
    const response = await axios.put(
      `${COURSES_API}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
  };

  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(
      `${COURSES_API}/${courseId}`
    );
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };

  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course);
    setCourses([ ...courses, response.data ]);
  };

  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);


   const [course, setCourse] = useState({
     _id: "1234", name: "New Course", number: "New Number",
     startDate: "2023-09-10", endDate: "2023-12-15",
     image: "reactjs.jpg"
   });
  //  const addNewCourse = () => {
  //    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  //  };
  //  const deleteCourse = (courseId: any) => {
  //    setCourses(courses.filter((course) => course._id !== courseId));
  //  };
  //  const updateCourse = () => {
  //    setCourses(
  //      courses.map((c) => {
  //        if (c._id === course._id) {
  //          return course;
  //        } else {
  //          return c;
  //        }
  //      })
  //    );
  //  };
 
   return (
      <Provider store={store}>
     <div className="d-flex">
      <KanbasNavigation/>
       <div style={{ flexGrow: 1 }}>
       <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />
          <Route path="Courses/:courseId/*" element={
            <Courses courses={courses} />} />
        </Routes>
       </div>
     </div>
     </Provider>
 );}
 export default Kanbas;