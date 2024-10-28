import React, { useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    setErrorMessage("");
    try {
      const response = await axios.post("http://3.140.210.119/api/auth/login", {
        username,
        password,
      });
      alert("Login successful");
      onLoginSuccess(response.data.token);
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Login failed. Please check your username or password.");
    }
  };

  const handleRegister = async () => {
    setErrorMessage("");
    try {
      const response = await axios.post(
        "http://3.140.210.119/api/auth/register",
        {
          username,
          password,
        }
      );
      alert("Registration successful");
      onLoginSuccess(response.data.token);
    } catch (error) {
      console.error("Error registering:", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
      <div className="button-group">
        <button onClick={handleLogin} className="auth-button login-button">
          Login
        </button>
        <button
          onClick={handleRegister}
          className="auth-button register-button"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Profile;
