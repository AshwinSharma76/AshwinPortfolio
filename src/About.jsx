import React from "react";
import "./About.css";
import fend from "./assets/frontend.png";
import bend from "./assets/backend.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import java from "./assets/java.png";
import hibernate from "./assets/hibernate.png";
import git from "./assets/gits.png";
import dsa from "./assets/dsa.png";
import collage from "./assets/collage.png";
import hsschool from "./assets/hsschool.png";
import hschool from "./assets/hschool.png";

import { motion } from "framer-motion";
import useWindowWidth from "./width";
export const About = () => {
  let wid = useWindowWidth();
  let skillUrl = [
    { url: html, name: "HTML" },
    { url: css, name: "CSS" },
    { url: js, name: "Java Script" },
    { url: react, name: "React.js" },
    { url: java, name: "Java" },
    { url: hibernate, name: "Hibernate" },
    { url: dsa, name: "DSA" },
    { url: git, name: "Git" },
  ];

  let education = [
    {
      stream: "B.Tech in Computer Science",
      name: "Mahakal Institute of Technology, Ujjain",
      date: "2020 - 2024",
      url: collage,
    },
    {
      stream: "12th ( H.S  School Certificate)",
      name: "Vinay Adarsh School, Ujjain",
      date: "2019 – 2020",
      url: hsschool,
    },
    {
      stream: "10th ( High  School Certificate)",
      name: "Modern Convent School, Ujjain",
      date: "2017 – 2018",
      url: hschool,
    },
  ];
  return (
    <div className="outerMain">
      <motion.div
        initial={{
          opacity: 0,
          translateX: "100%",
        }}
        whileInView={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{
          delay: 0,
          duration: 0.8,
        }}
      >
        <div className="mainDiv">
          <motion.div
            className="intro"
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: 3.2,
              duration: 2,
            }}
          >
            I’m Ashwin Sharma, a dedicated and curious developer currently
            pursuing a B.Tech in Computer Science. I have a strong interest in
            software development and UI/UX design, and I enjoy turning ideas
            into practical, user-friendly solutions. I’m constantly learning new
            technologies and improving my skills by working on real-world
            projects. My goal is to grow as a developer and contribute to
            meaningful digital experiences in a collaborative environment.
          </motion.div>
        </div>
        <div className="section1">
          <motion.div
            className="sec1"
            initial={{
              x: -1000,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: 3.3,
              duration: 2,
            }}
          >
            <section>
              <img src={fend} alt="Frontend" />
              <motion.h2
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                  y: [0, -5, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  scale: { delay: 4.3, duration: 1.5, ease: "easeOut" },
                  y: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
                  rotate: {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                Front-End Development
              </motion.h2>
            </section>
            <p>
              High-quality development of responsive and dynamic websites with
              clean, scalable, and performance-optimized code for modern web
              applications. Focused on creating user-friendly interfaces that
              enhance engagement and usability. Proficient in modern frameworks
              and tools to build efficient, maintainable projects. Dedicated to
              delivering solutions that balance performance, design, and
              functionality.
            </p>
          </motion.div>
          <motion.div
            className="sec1"
            initial={{
              x: 1000,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: 3.3,
              duration: 2,
            }}
          >
            <section>
              <img src={bend} alt="backend" />
              <motion.h2
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                  y: [0, -5, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  scale: { delay: 4.3, duration: 1.6, ease: "easeOut" },
                  y: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
                  rotate: {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                Back-End Development
              </motion.h2>
            </section>
            <p>
              Developing secure and efficient server-side logic, integration of
              APIs and databases for full functionality, ensuring data
              consistency, reliability, and performance. Implementing
              authentication, authorization, and data protection measures to
              safeguard applications. Optimizing queries and server processes
              for high scalability and reduced latency. Designing maintainable
              architectures that support seamless integration and future growth.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="skillHead"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <h1>Skills</h1>
        <div className="gridDivOuter">
          {skillUrl.map((v, i) => {
            return (
              <motion.div
                whileTap={{
                  rotateZ: 360,
                  duration: 0.1,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 10px 5px #0637e796",
                }}
                className="grid-items"
                key={i}
              >
                <div>
                  <motion.img
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      y: { duration: `2.${i}`, repeat: Infinity },
                    }}
                    src={v.url}
                    alt={v.name}
                  />
                  <p>{v.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {wid > 650 ? (
        <motion.div
          className="educationDiv"
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1>Education</h1>
          {education.map((v, i) => {
            return (
              <motion.div
                initial={{
                  x: -500,
                }}
                whileInView={{
                  x: 0,
                }}
                transition={{ x: { duration: 1, ease: "easeInOut" } }}
                viewport={{ once: false }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px 4px rgba(255,255,255,0.8)",
                }}
                className="eduSec"
                key={i}
              >
                <div className="eduLogo">
                  <img src={v.url} alt="Collage" />
                </div>
                <div className="info">
                  <h2>{v.stream}</h2>
                  <h4>{v.name}</h4>
                  <p>{v.date}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      ) : (
        <div className="educationDiv">
          <h1>Education</h1>
          {education.map((v, i) => {
            return (
              <div className="eduSec" key={i}>
                <div className="eduLogo">
                  <img src={v.url} alt="Collage" />
                </div>
                <div className="info">
                  <h2>{v.stream}</h2>
                  <h4>{v.name}</h4>
                  <p>{v.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <br />
    </div>
  );
};
