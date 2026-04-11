import React, { useEffect, useState } from "react";
import API from "../services/api";
import "./Students.css";

const Students = ({ setPage }) => {  
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");

  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async () => {
    await API.post("/students", { name, className });
    setName("");         
    setClassName("");   
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await API.delete(`/students/${id}`);
    fetchStudents();
  };

 
  return (
  <div className="students">

    <div className="header">
      <button className="back-btn" onClick={() => setPage("dashboard")}>
      ⬅ Back
      </button>
      <h2>Students</h2>
    </div>

    <input placeholder="Name"value={name}onChange={(e) => setName(e.target.value)}/>
    <input placeholder="Class"value={className}onChange={(e) => setClassName(e.target.value)}/>
    <button onClick={addStudent}>Add</button>

    <ul>
      {students.map((s) => (
        <li key={s.id}>
          <span>{s.name} - {s.class}</span>
          <button onClick={() => deleteStudent(s.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);
};

export default Students;