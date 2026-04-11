import React, { useState } from "react";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import Tasks from "../pages/Tasks";
import "./Navbar.css";

const Navbar = () => {
  const [page, setPage] = useState("dashboard");
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));

  if (!auth) {
    return <Login setAuth={setAuth} />;
  }

  return (
    <div>
      <div className="nav">
        <h2 className="logo">🎓 Student Manager</h2>

        <div className="nav-buttons">
          <button onClick={() => setPage("dashboard")}>Dashboard</button>
          <button onClick={() => { localStorage.removeItem("token");setAuth(false);}}>
          Logout
          </button>
        </div>
      </div>
      {page === "dashboard" && <Dashboard setPage={setPage} />}
      {page === "students" && <Students setPage={setPage} />}
      {page === "tasks" && <Tasks setPage={setPage} />}
    </div>
  );
};

export default Navbar;