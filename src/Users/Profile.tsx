import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({ username: "", password: "", 
    firstName: "", lastName: "", dob: "", email: "", role: "USER" });
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  const save = async () => {
    await client.updateUser(profile);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };
  return (
    <div>
       <h1>Profile
                <button className="btn btn-primary ms-4" onClick={save}>
                    Save
                </button>
                <Link to="/Kanbas/Account/Admin/Users"
                    className="btn btn-warning ms-2">
                    Users
                </Link>
          </h1>
      {profile && (
        <div>
          <input value={profile.username} placeholder="username" onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })}/> <br/>
          <input value={profile.password} placeholder="password" onChange={(e) =>
            setProfile({ ...profile, password: e.target.value })}/> <br/>
          <input value={profile.firstName} placeholder="first name" onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })}/> <br/>
          <input value={profile.lastName} placeholder="last name" onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })}/> <br/>
          <input value={profile.dob} placeholder="dob" type="date" onChange={(e) =>
            setProfile({ ...profile, dob: e.target.value })}/> <br/>
          <input value={profile.email} placeholder="email" onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })}/> <br/>
          <select onChange={(e) =>
              setProfile({ ...profile, role: e.target.value })}> <br/>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select><br />
                    <button className="btn btn-danger" onClick={signout}>
                        Signout
                    </button>
        </div>
      )}
    </div>
  );
}
