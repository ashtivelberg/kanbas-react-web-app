import ModuleList from "../Modules/List";
import CourseStatus from "../Navigation/CourseStatus";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill" style={{ paddingLeft: '10px' }}>
        <ModuleList />
      </div>
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: '220px', paddingLeft: '10px' }}>
        <CourseStatus/>
      </div>
    </div>
  );
}
export default Home;