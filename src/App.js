import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import "./App.css";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
