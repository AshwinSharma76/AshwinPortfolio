import React from "react";
import "./Resume.css";
import { motion } from "framer-motion";
import reactjs from "./assets/react.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import java from "./assets/java.png";
import hibernate from "./assets/hibernate.png";
import git from "./assets/gits.png";
import dsa from "./assets/dsa.png";
export let Resume = () => {
  const imgArray = [reactjs, html, css, js, java, hibernate, git, dsa];

  return (
    <div className="resumeOuter">
      <center>
        <AniText text={"Download Resume"} />
        <motion.button
          initial={{
            x: 0,
          }}
          whileTap={{
            scale: 1.2,
            x: 700,
          }}
        >
          Resume
        </motion.button>
      </center>

      {imgArray.map((v, i) => {
        return (
          <motion.img
            key={i}
            animate={{
              y: [-500, 1000],
              x: i * 1 + 200,
              scale: [0.6, 1, 0.8, 1.1],
              opacity: 0.4,
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: 1 * i,
            }}
            src={v}
            alt=""
            width={40}
            style={{
              zIndex: -5,
            }}
          />
        );
      })}
    </div>
  );
};

const AniText = ({ text = "Ani-Text" }) => {
  let ary = text.split("");
  console.log(ary);
  return (
    <h1>
      <br />
      {ary.map((v, i) => {
        return (
          <motion.span
            key={i}
            initial={{}}
            animate={{
              y: [0, -1, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              display: "inline-block",
              marginRight: "2px",
              fontFamily: "Kumbh Sans, sans-serif",
              fontWeight: 600,
            }}
          >
            {v === " " ? "\u00A0" : v}
          </motion.span>
        );
      })}
    </h1>
  );
};
