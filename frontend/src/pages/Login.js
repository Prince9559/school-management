import React, { useState } from "react";
import API from "../services/api";
import "./Login.css";

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setAuth(true);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <div className="left">
          <h1>Welcome</h1>
          <p>Manage students & tasks easily 🚀</p>
        </div>

        <div className="right">
          <h2>Login</h2>

          {error && <p className="error">{error}</p>}
          <input type="email" placeholder="Email"value={email}onChange={(e) => setEmail(e.target.value)}/>
          <input type="password"placeholder="Password"value={password}onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={handleLogin}>LOGIN</button>
        </div>

      </div>

    </div>
  );
};

export default Login;