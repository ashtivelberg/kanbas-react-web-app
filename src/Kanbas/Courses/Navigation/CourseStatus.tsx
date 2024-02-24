import 'font-awesome/css/font-awesome.min.css';
import assignments from '../../Database/assignments.json';

function CourseStatus() {
    return (
        <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: "250px" }}>
            <h3>Course Status</h3>
            <button>
                <i className="fa fa-ban"></i>Unpublish
            </button>
            <button className="green-button">
                <i className="fa fa-check-circle"></i>Published
            </button>
            <br />
            <div className="mt-2">
                <button>
                    <i className="fa fa-upload"></i>Import Existing Content
                </button>
                <button>
                    <i className="fa fa-upload"></i>Import From Commons
                </button>
                <button>
                    <i className="fa fa-home"></i>Choose Home Page
                </button>
                <button>
                    <i className="fa fa-eye"></i>View Course Stream
                </button>
                <button>
                    <i className="fa fa-bullhorn"></i>New Announcement
                </button>
                <button>
                    <i className="fa fa-bar-chart"></i>New Analytics
                </button>
                <button>
                    <i className="fa fa-bell"></i>View Course Notifications
                </button>
                <div className="d-flex mt-2">
                    <h3>To Do</h3>
                    <hr className="m-0" />
                </div>
                <div className="scrollable-list" style={{ maxHeight: "300px", overflowY: "auto" }}>
                    {assignments.slice(0, 3).map((assignment) => (
                        <div className="wd-course-item d-flex" key={assignment._id}>
                            <div>
                                <i className="fa fa-calendar me-2"></i>
                            </div>
                            <div className="ms-1">
                                <a href="#">{assignment.title}</a>
                                <p>100 Points - February 6th 11:59 PM</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex mt-2">
                    <h3>Coming Up</h3>
                </div>
                <hr className="m-0" />
                <div className="scrollable-list" style={{ maxHeight: "300px", overflowY: "auto" }}>
                    {assignments.slice(3, 6).map((assignment) => (
                        <div className="wd-course-item d-flex" key={assignment._id}>
                            <div>
                                <i className="fa fa-calendar me-2"></i>
                            </div>
                            <div className="ms-1">
                                <a href="#">{assignment.title}</a>
                                <p>100 Points - February 14th 11:59 PM</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CourseStatus;
