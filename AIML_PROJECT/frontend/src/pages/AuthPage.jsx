import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="auth-container" style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2 style={{ textAlign: "center" }}>{isLogin ? "Login" : "Sign Up"}</h2>
      {isLogin ? (
        <form>
          <div style={{ marginBottom: 16 }}>
            <label>Email:</label>
            <input type="email" required style={{ width: "100%" }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Password:</label>
            <input type="password" required style={{ width: "100%" }} />
          </div>
          <button type="submit" style={{ width: "100%", padding: 8 }}>Login</button>
        </form>
      ) : (
        <form>
          <div style={{ marginBottom: 16 }}>
            <label>Name:</label>
            <input type="text" required style={{ width: "100%" }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Email:</label>
            <input type="email" required style={{ width: "100%" }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Password:</label>
            <input type="password" required style={{ width: "100%" }} />
          </div>
          <button type="submit" style={{ width: "100%", padding: 8 }}>Sign Up</button>
        </form>
      )}
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <button type="button" onClick={handleToggle} style={{ background: "none", border: "none", color: "#007bff", cursor: "pointer", textDecoration: "underline" }}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
