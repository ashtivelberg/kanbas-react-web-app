import axios from "axios";
const COURSES_API = "http://localhost:4000/api/courses";
const MODULES_API = "http://localhost:4000/api/modules";
export const deleteModule = async (moduleId: any) => {
  const response = await axios
    .delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

