import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <div className="Outer">
      <div className="prjInfoDiv">
        <h1>Project_Name</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          exercitationem, dolorem velit alias omnis recusandae incidunt sapiente
          non quisquam debitis ratione voluptatibus nisi porro nostrum! Fuga
          nesciunt voluptate perferendis iure.
        </p>
        <div className="techUsed">
          <motion.div
            whileHover={{
              rotate: 5,
            }}
          >
            HTML
          </motion.div>
          <div>CSS</div>
          <div>JS</div>
        </div>
        <span className="visitDiv">
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "white",
              color: "black",
            }}
          >
            View
          </motion.button>
          <button>Git</button>
        </span>
      </div>
      <div className="prjInfoDiv">
        <h1>Project_Name</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          exercitationem, dolorem velit alias omnis recusandae incidunt sapiente
          non quisquam debitis ratione voluptatibus nisi porro nostrum! Fuga
          nesciunt voluptate perferendis iure.
        </p>
        <div className="techUsed">
          <motion.div
            whileHover={{
              rotate: 5,
            }}
          >
            HTML
          </motion.div>
          <div>CSS</div>
          <div>JS</div>
        </div>
        <span className="visitDiv">
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "white",
              color: "black",
            }}
          >
            View
          </motion.button>
          <button>Git</button>
        </span>
      </div>{" "}
      <div className="prjInfoDiv">
        <h1>Project_Name</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          exercitationem, dolorem velit alias omnis recusandae incidunt sapiente
          non quisquam debitis ratione voluptatibus nisi porro nostrum! Fuga
          nesciunt voluptate perferendis iure.
        </p>
        <div className="techUsed">
          <motion.div
            whileHover={{
              rotate: 5,
            }}
          >
            HTML
          </motion.div>
          <div>CSS</div>
          <div>JS</div>
        </div>
        <span className="visitDiv">
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "white",
              color: "black",
            }}
          >
            View
          </motion.button>
          <button>Git</button>
        </span>
      </div>
    </div>
  );
}
