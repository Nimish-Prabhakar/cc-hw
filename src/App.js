import React, { useState, useEffect } from "react";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = (token) => {
    localStorage.setItem("authToken", token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Profile onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <Dashboard />
        </div>
      )}
    </div>
  );
};

export default App;
