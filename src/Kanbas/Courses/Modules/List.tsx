import React, { useEffect, useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import * as client from "./client";
import { KanbasState } from "../../store";

function ModuleList() {
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };


  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
       {/* <!-- Add buttons here --> */}
      {/* <hr /> */}
      <div className="wd-justify-end mt-2">
        <button>Collapse All</button>
        <button>View Progress</button>
        <select name="publish-all">
          <option value="publish all">Publish All</option>
        </select>
        <button className = "wd-module-button">
            <i className="fa fa-plus"></i> Module</button>
        {/* <button>
             <i className="fa fa-ellipsis-v ms-2"></i></button> */}
        </div>
        <hr />

             <label>Module Name</label> <br/>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/> <br/>
          <label>Module Description</label> <br/>
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/> <br/>

        <button className="btn btn-success ms-2"
          onClick={handleAddModule}>
          Add
        </button>
        <button className="btn btn-secondary ms-2"
          onClick={handleUpdateModule}>
          Update
        </button>

      <ul className="list-group wd-modules">
          <ul className="list-group wd-modules">
            {moduleList
              .filter((module) => module.course === courseId)
              .map((module, index) => (
                <li key={index} className="list-group-item"
                onClick={() => setSelectedModule(module)}>
                <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
                <button className="ms-2"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                  <button className="btn btn-danger  ms-2"
                    onClick={() => handleDeleteModule(module._id)}>
                    Delete
                  </button>
              </span>
            </div>
            {selectedModule && selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson:any, index:any) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
                </li>
          ))}
          </ul>
    </ul>
    </>
  );
}
export default ModuleList;


// function ModuleList() {
//   const { courseId } = useParams();
//   const [moduleList, setModuleList] = useState<any[]>(modules);
//   const [module, setModule] = useState({
//     _id: "0", name: "New Module",
//     description: "New Description",
//     course: courseId || "",
//   });
//   const addModule = (module: any) => {
//     const newModule = { ...module,
//       _id: new Date().getTime().toString() };
//     const newModuleList = [newModule, ...moduleList];
//     setModuleList(newModuleList);
//   };
//   const deleteModule = (moduleId: string) => {
//     const newModuleList = moduleList.filter(
//       (module) => module._id !== moduleId );
//     setModuleList(newModuleList);
//   };
//   const updateModule = () => {
//     const newModuleList = moduleList.map((m) => {
//       if (m._id === module._id) {
//         return module;
//       } else {
//         return m;
//       }
//     });
//     setModuleList(newModuleList);
//   };

//   const modulesList = modules.filter((module) => module.course === courseId);
//   const [selectedModule, setSelectedModule] = useState(modulesList[0]);
//   return (
//     <>
//       {/* <!-- Add buttons here --> */}
//       {/* <hr /> */}
//       <div className="wd-justify-end mt-2">
//         <button>Collapse All</button>
//         <button>View Progress</button>
//         <select name="publish-all">
//           <option value="publish all">Publish All</option>
//         </select>
//         <button className = "wd-module-button">
//             <i className="fa fa-plus"></i> Module</button>
//         {/* <button>
//              <i className="fa fa-ellipsis-v ms-2"></i></button> */}
//         </div>
//         <hr />

//       <ul className="list-group wd-modules">
//       <li className="list-group-item">
//         <button onClick={() => { addModule(module) }}>Add</button>
//         <button onClick={updateModule}>
//                 Update
//         </button>
//         <input value={module.name}
//           onChange={(e) => setModule({
//             ...module, name: e.target.value })}
//         />
//         <textarea value={module.description}
//           onChange={(e) => setModule({
//             ...module, description: e.target.value })}
//         />
//       </li>

//       {moduleList
//         .filter((module) => module.course === courseId)
//         .map((module, index) => (
//           <li key={index} className="list-group-item"
//             onClick={() => setSelectedModule(module)}>
//              <button
//               onClick={(event) => { setModule(module); }}>
//               Edit
//             </button>
//             <button
//               onClick={() => deleteModule(module._id)}>
//               Delete
//             </button>

//             <div>
//               <FaEllipsisV className="me-2" />
//               {module.name}
//               <span className="float-end">
//                 <FaCheckCircle className="text-success" />
//                 <FaPlusCircle className="ms-2" />
//                 <FaEllipsisV className="ms-2" />
//               </span>
//             </div>
//             {selectedModule._id === module._id && (
//               <ul className="list-group">
//                 {module.lessons?.map((lesson, index) => (
//                   <li className="list-group-item" key={index}>
//                     <FaEllipsisV className="me-2" />
//                     {lesson.name}
//                     <span className="float-end">
//                       <FaCheckCircle className="text-success" />
//                       <FaEllipsisV className="ms-2" />
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default ModuleList;