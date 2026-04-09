import React, { useEffect, useState } from "react";
import API from "../services/api";
import "./Students.css";

const Students = ({ setPage }) => {   // 👈 1. props add karo
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
    setName("");         // 👈 input clear
    setClassName("");    // 👈 input clear
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await API.delete(`/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="students">

      {/* 🔥 Back Button */}
      <button className="back-btn" onClick={() => setPage("dashboard")}>
        ⬅ Back
      </button>

      <h2>Students</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Class"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
      />

      <button onClick={addStudent}>Add</button>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.class}
            <button onClick={() => deleteStudent(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;