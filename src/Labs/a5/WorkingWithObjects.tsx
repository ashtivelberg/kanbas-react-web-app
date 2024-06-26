import React, { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
      
      const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
      };
      const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
      };
      useEffect(() => {
        fetchAssignment();
      }, []);

      
      const [module, setModule] = useState({
        id: 1, name: "Assignment 5",
        description: "Deving a Web",
        course: "CS4550",
      });
      const MODULE_URL = API_BASE + "/a5/module";

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties (Axios)</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button className="btn btn-primary" onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button className="btn btn-primary" onClick={fetchAssignment} >
        Fetch Assignment
      </button>

      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href={ASSIGNMENT_URL}>
        Get Assignment
      </a>

      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary" href={ASSIGNMENT_URL + "/title"}>
        Get Title
      </a>

      <h4>Modifying Properties</h4>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>

      <input type="number" 
        onChange={(e) => setAssignment({ ...assignment,
            score: Number(e.target.value) })}
        value={assignment.score}/>
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Score
      </a>

    <input type="checkbox"
        onChange={(e) => setAssignment({ ...assignment,
            completed: e.target.checked })}
        checked={assignment.completed} />
    <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Completed
    </a>

    <h4>Get Module</h4>
    <a className="btn btn-primary" href={MODULE_URL}>
    Get Module
      </a>

      <h4>Get Module Name</h4>
      <a className="btn btn-primary" href={MODULE_URL + "/name"}>
        Get Module Name
      </a>

      <h4>Modifying Module</h4>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/>
      <a className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>
        Update Module Name
      </a>

      <input type="text" 
        onChange={(e) => setModule({ ...module,
            description: e.target.value })}
        value={module.description}/>
      <a className="btn btn-primary" href={`${MODULE_URL}/description/${module.description}`}>
        Update Module Description
      </a>
    </div>
  );
}
export default WorkingWithObjects;