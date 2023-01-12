import React, { useState } from "react";

export const Register = (props) => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id, pass);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="id">ID</label>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="text"
          placeholder="ID"
          id="id"
          name="id"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setId(e.target.value)}
          type="text"
          placeholder="email@email.com"
          id="email"
          name="email"
        />
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setId(e.target.value)}
          type="text"
          placeholder="Name"
          id="name"
          name="name"
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
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Let's go Login.
      </button>
    </div>
  );
};
