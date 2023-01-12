import React, { useState } from "react";

export const Login = (props) => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id, pass);
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="id">ID</label>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="text"
          placeholder="ID"
          id="id"
          name="id"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="password"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account?<br></br> Register here.
      </button>
    </div>
  );
};
