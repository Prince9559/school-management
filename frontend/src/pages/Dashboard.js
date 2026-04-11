import React from "react";
import "./Dashboard.css";

const Dashboard = ({ setPage }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h1>🚀 Dashboard</h1>

        <button onClick={() => setPage("students")}>
          Students
        </button>

        <button onClick={() => setPage("tasks")}>
          Tasks
        </button>
      </div>
    </div>
  );
};

export default Dashboard;