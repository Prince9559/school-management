import React, { useEffect, useState } from "react";
import API from "../services/api";
import "./Tasks.css";

const Tasks = ({ setPage }) => { // 👈 RECEIVE PROP
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [studentId, setStudentId] = useState("");
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title || !studentId) {
      setError("All fields are required");
      return;
    }

    try {
      await API.post("/tasks", {
        title,
        student_id: Number(studentId),
      });

      setTitle("");
      setStudentId("");
      setError("");
      fetchTasks();
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Error adding task");
    }
  };

  const completeTask = async (id) => {
    try {
      await API.put(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

 
  return (
  <div className="tasks">

    {/* 🔥 Header */}
    <div className="header">
      <button className="back-btn" onClick={() => setPage("dashboard")}>
        ⬅ Back
      </button>
      <h2>Tasks</h2>
    </div>

    {error && <p className="error">{error}</p>}

    <input
      placeholder="Task Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <input
      placeholder="Student ID"
      value={studentId}
      onChange={(e) => setStudentId(e.target.value)}
    />

    <button onClick={addTask}>Assign</button>

    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          <span>
            {t.title} - {t.name} -{" "}
            <strong>{t.completed ? "Done" : "Pending"}</strong>
          </span>

          {!t.completed && (
            <button onClick={() => completeTask(t.id)}>
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  </div>
);
};

export default Tasks;