import React from "react";
import "./Dashboard.css";

const Dashboard = ({ setPage }) => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={() => setPage("students")}>Students</button>
      <button onClick={() => setPage("tasks")}>Tasks</button>
    </div>
  );
};

export default Dashboard;