import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { users } from "../data/mockData";
import bgImage from "../bg.jpg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const user = users.find(
      (item) =>
        item.username === username.trim() &&
        item.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="login-page">
      <div
        className="login-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="login-form-section">
        <div className="login-card">

          <div className="text-center mb-4">
            <i className="bi bi-box-seam-fill login-icon"></i>

            <h2 className="mt-2">
              Smart Asset
            </h2>

            <p className="text-muted">
              Sign in to manage your assets
            </p>
          </div>

          <form onSubmit={handleLogin}>

            <div className="mb-3">
              <label className="form-label">
                Username
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(event) =>
                    setUsername(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">
                Password
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              <i className="bi bi-box-arrow-in-right me-2"></i>
              Login
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;