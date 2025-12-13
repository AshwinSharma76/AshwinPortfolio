import React, { useCallback, useEffect, useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { fetchProjects } from "./Backend/AddFun";
export default function Projects() {
  let [data, updateData] = useState([]);
  let [isError, updateError] = useState(false);
  let getData = useCallback(async () => {
    try {
      let res = await fetchProjects();
      updateData(res);
      updateError(false);
    } catch (er) {
      updateError(true);
    }

    if (data.length === 0) {
      updateError(true);
    }
  });

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  if (data.length === 0) {
    return (
      <>
        <center>
          <br />
          <br />
          <br />
          <h1 style={{ color: "white" }}>Loading</h1>
          <br />
          <br />
          <br />
        </center>
      </>
    );
  }
  return (
    <div className="Outer">
      {data.map((v, i) => {
        return (
          <div key={i} className="prjInfoDiv">
            <h1>{v.title}</h1>
            <p>{v.description}</p>
            <div className="techUsed">
              {v.technologies.map((tech, idx) => {
                return (
                  <motion.div
                    key={idx}
                    whileHover={{
                      rotate: 5,
                    }}
                  >
                    {tech}
                  </motion.div>
                );
              })}
            </div>
            <span className="visitDiv">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "white",
                  color: "black",
                }}
                onClick={() => {
                  window.open(v.deployLink, "_blank");
                }}
              >
                View
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "white",
                  color: "#000000",
                }}
                onClick={() => {
                  window.open(v.git, "_blank");
                }}
              >
                Git
              </motion.button>
            </span>
          </div>
        );
      })}
    </div>
  );
}
