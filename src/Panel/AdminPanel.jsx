import React from "react";
import "./Admin.css";
import AddProjects from "./AddProjects";

export default function AdminPanel() {
  return (
    <div className="panelDiv">
      <br />
      <center>
        <h1>Admin Panel</h1>
        <input type="text" placeholder="Name" />
        <br />
        <input type="text" placeholder="Profile I" />
        <br />
      </center>
      <br /> <br />
      <AddProjects /> <br />
    </div>
  );
}
