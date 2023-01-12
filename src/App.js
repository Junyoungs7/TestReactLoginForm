import React, { useState } from "react";
import PrivateStudy from "./routes/PrivateStudy";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import styles from "./App.css";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {currentForm == "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
