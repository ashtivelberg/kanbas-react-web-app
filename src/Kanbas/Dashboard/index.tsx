import { Link } from "react-router-dom";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; })
  {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />

      <label >Course Name</label>
      <input value={course.name} style={{ maxWidth: "250px" }} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />

      <label >Course Number</label>
      <input value={course.number} style={{ maxWidth: "250px" }} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />

      <label >Start Date</label>
      <input value={course.startDate} style={{ maxWidth: "250px" }} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
             
      <label >End Date</label>
      <input value={course.endDate} style={{ maxWidth: "250px" }} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      
      <button className="btn btn-success ms-1" onClick={addNewCourse} >
        Add
      </button>
      <button className="btn btn-secondary ms-1" onClick={updateCourse} >
        Update
      </button>

      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  {course.name}
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary ms-1">
                    Go </Link>
                    <button className="btn btn-secondary ms-1" onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>
                      
                    <button className="btn btn-danger ms-1" onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;