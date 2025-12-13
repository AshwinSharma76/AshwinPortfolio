import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../Backend/Firebase";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
export default function AdminLogin() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in:", user.user);
      alert("Login Successful!");
      navigate("/adminPanel");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="divMain">
      <center>
        <h1>Admin Login</h1>
      </center>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <center>
        <button onClick={login}>Login</button>
      </center>
    </div>
  );
}
