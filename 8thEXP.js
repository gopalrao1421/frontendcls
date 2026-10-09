import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import "./style.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("Admin User");

  // LOGIN
  if (!loggedIn) {
    const login = (e) => {
      e.preventDefault();

      if (
        email === "admin@example.com" &&
        password === "123456"
      ) {
        setLoggedIn(true);
      } else {
        alert("Invalid email or password");
      }
    };

    return (
      <div style={styles.loginContainer}>
        <form onSubmit={login} style={styles.loginBox}>
          <h1>My App</h1>
          <p>Login to continue</p>

          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button style={styles.button} type="submit">
            Login
          </button>

          <p style={{ color: "#777", fontSize: 12 }}>
            Demo: admin@example.com / 123456
          </p>
        </form>
      </div>
    );
  }

  // DASHBOARD
  const Dashboard = () => (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {name}!</p>

      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>Users</h3>
          <h2>120</h2>
        </div>

        <div style={styles.card}>
          <h3>Orders</h3>
          <h2>45</h2>
        </div>

        <div style={styles.card}>
          <h3>Revenue</h3>
          <h2>$12,500</h2>
        </div>
      </div>
    </div>
  );

  // PROFILE
  const Profile = () => {
    const saveProfile = (e) => {
      e.preventDefault();
      alert("Profile updated successfully!");
    };

    return (
      <div>
        <h1>Profile</h1>

        <form
          onSubmit={saveProfile}
          style={styles.profileBox}
        >
          <label>Name</label>

          <input
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>

          <input
            style={styles.input}
            value="admin@example.com"
            disabled
          />

          <button style={styles.button}>
            Save Profile
          </button>
        </form>
      </div>
    );
  };

  // MAIN APPLICATION
  return (
    <div>
      <header style={styles.header}>
        <h2>My Application</h2>

        <div>
          <button
            style={styles.navButton}
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </button>

          <button
            style={styles.navButton}
            onClick={() => setPage("profile")}
          >
            Profile
          </button>

          <button
            style={styles.logout}
            onClick={() => {
              setLoggedIn(false);
              setEmail("");
              setPassword("");
            }}
          >
            Logout
          </button>
        </div>
      </header>

      <main style={styles.main}>
        {page === "dashboard" && <Dashboard />}
        {page === "profile" && <Profile />}
      </main>
    </div>
  );
}

// STYLES
const styles = {
  loginContainer: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f3f4f6",
    fontFamily: "Arial",
  },

  loginBox: {
    width: "350px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0 15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  header: {
    height: "65px",
    background: "#111827",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 25px",
    fontFamily: "Arial",
  },

  navButton: {
    background: "transparent",
    border: "none",
    color: "white",
    padding: "10px 15px",
    cursor: "pointer",
  },

  logout: {
    background: "#dc2626",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  main: {
    padding: "40px",
    fontFamily: "Arial",
    background: "#f3f4f6",
    minHeight: "calc(100vh - 65px)",
  },

  cards: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "white",
    padding: "25px",
    width: "200px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },

  profileBox: {
    background: "white",
    padding: "25px",
    maxWidth: "400px",
    borderRadius: "10px",
  },
};

createRoot(document.getElementById("root")).render(
  <App />
);