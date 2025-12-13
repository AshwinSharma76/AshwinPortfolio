import React, { useState } from "react";
import { addProjects } from "../Backend/AddFun";
import AddResume from "./AddResume";

export default function AddProjects() {
  let [prj, updpro] = useState({
    title: "",
    description: "",
    git: "",
    deployLink: "",
    technologies: "",
  });

  function handleform(e) {
    updpro({ ...prj, [e.target.name]: e.target.value });
  }

  const handleAdd = async () => {
    try {
      const dataToSend = {
        ...prj,
        technologies: prj.technologies.split(","),
      };

      let res = await addProjects("Projects", dataToSend);

      alert("Added Successfully. ID: " + res);

      // reset form
      updpro({
        title: "",
        description: "",
        git: "",
        deployLink: "",
        technologies: "",
      });
    } catch (err) {
      alert("Error:-" + err.message);
      console.error(err);
    }
  };

  return (
    <>
      <center>
        <h1>Add Projects</h1>
        <div>
          <input
            type="text"
            placeholder="Project Title"
            name="title"
            value={prj.title}
            onChange={handleform}
            required
          />
          <br />

          <textarea
            placeholder="Description"
            name="description"
            value={prj.description}
            onChange={handleform}
            required
          ></textarea>
          <br />

          <input
            type="text"
            name="git"
            placeholder="GitHub Link"
            value={prj.git}
            onChange={handleform}
            required
          />
          <br />

          <input
            type="text"
            name="deployLink"
            placeholder="Deployed Link"
            value={prj.deployLink}
            onChange={handleform}
            required
          />
          <br />

          <textarea
            placeholder="Technologies (comma separated)"
            name="technologies"
            value={prj.technologies}
            onChange={handleform}
            required
          ></textarea>
          <br />

          <button onClick={handleAdd}>Add</button>
        </div>
        <br /> <br />
        <AddResume />
      </center>
    </>
  );
}
