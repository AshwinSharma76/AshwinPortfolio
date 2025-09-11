import React from "react";
import "./About.css";
import fend from "./assets/frontend.png";
import bend from "./assets/backend.png";
import { motion } from "framer-motion";
export const About = () => {
  return (
    <div className="outerMain">
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
          software development and UI/UX design, and I enjoy turning ideas into
          practical, user-friendly solutions. I’m constantly learning new
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
          whileHover={{
            y: -20,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
        >
          <section>
            <img src={fend} alt="Frontend" />
            <h2>Front-End Development</h2>
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
            <h2>Back-End Development</h2>
          </section>
          <p>
            Developing secure and efficient server-side logic, integration of
            APIs and databases for full functionality, ensuring data
            consistency, reliability, and performance. Implementing
            authentication, authorization, and data protection measures to
            safeguard applications. Optimizing queries and server processes for
            high scalability and reduced latency. Designing maintainable
            architectures that support seamless integration and future growth.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
