import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import "@fontsource/kumbh-sans";
import mail from "./assets/mail.png";
import linkdin from "./assets/linkdin.png";
import git from "./assets/git.png";
import pic from "./assets/pic.png";
import { About } from "./About";
import { Resume } from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import useWindowWidth from "./width";

export const Index = () => {
  let widgets = [<About />, <Resume />, <Projects />, <Contact />];
  let [value, updatevalue] = useState(0);
  let wid = useWindowWidth();

  const head = ["About us", "Resume", "Projects", "Contact"];

  let imgAnimation = {
    whileHover: {
      scale: 1.2,
    },
  };

  function changePage(e) {
    updatevalue(e);
  }
  return (
    <>
      <div className="mainDiv">
        {wid < 1100 ? null : (
          <motion.div
            className="leftDIv1"
            style={{
              border: "solid",
              position: "relative",
            }}
            initial={{
              height: 0,
              width: 0,
              borderRadius: 0,
            }}
            animate={{
              height: "660px",
              width: "25vw",
              borderRadius: "20px",
              borderWidth: [1, 2, 1],
              borderColor: "white",

              boxShadow: [
                "0 0 2px 1px blue", // blur-radius 2px
                "0 0 5px 2px blue", // blur-radius 5px
                "0 0 3px 1px blue", // blur-radius 3px
                "0 0 4px 2px blue", // blur-radius 4px
                "0 0 2px 1px blue",
              ],
            }}
            transition={{
              duration: 3,
              delay: 0.5,
              animation: "easeOut",
              boxShadow: {
                duration: 3,
                repeat: Infinity,
              },
            }}
          >
            <motion.div
              className="profileDiv"
              initial={{
                height: "0",
                width: "0",
                y: -1000,
              }}
              animate={{
                height: "180px",
                width: "190px",
                y: 0,
                x: -90,
                borderRadius: "15px",
              }}
              transition={{
                duration: 2,
                delay: 3.1,
                ease: "easeOut",
              }}
            >
              <img src={pic} alt="Pic" />
            </motion.div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.h2
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  padding: "5px",
                  fontFamily: "Kumbh Sans, sans-serif",
                  fontSize: "clamp(16px, 4vw, 24px)",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
                initial={{
                  x: -1000,
                  y: -1000,
                  color: "transparent",
                }}
                animate={{
                  y: 250,
                  x: -90,
                  color: "white",
                }}
                transition={{
                  delay: 3.1,
                  animation: "easeInOut",
                }}
              >
                Ashwin Sharma
              </motion.h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                initial={{
                  x: -1000,
                }}
                animate={{
                  y: 310,
                  x: 0,
                }}
                className="headDiv"
              >
                <center>Full Stack Developer</center>
              </motion.div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "370px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "fit-content",
                width: "100%",
                backgroundColor: "transparent",
              }}
            >
              <div
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, width: "75%" }}
                  animate={{ opacity: 1, width: ["10%", "50%", "75%"] }}
                  transition={{ delay: 3.1, duration: 5, repeat: Infinity }}
                  style={{
                    height: "2px",
                    backgroundColor: "#0637e7",
                    margin: "20px",
                    borderRadius: 20,
                  }}
                ></motion.div>
                <motion.div
                  className="boxcon"
                  initial={{
                    x: -1000,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 3.1,
                    duration: 1.5,
                  }}
                >
                  <motion.img
                    src={mail}
                    alt="Mail"
                    whileHover={imgAnimation.whileHover}
                  />
                  <div>
                    <h2>Email:-</h2>
                    <p>ashwinsharma76@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div
                  className="boxcon"
                  initial={{
                    x: -1000,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 3.5,
                    duration: 1.5,
                  }}
                >
                  <motion.img
                    src={linkdin}
                    alt="Linkdin"
                    width="50"
                    whileHover={imgAnimation.whileHover}
                  />
                  <div>
                    <h2>Linkdin:-</h2>
                    <p>ashwin-sharma-037589242</p>
                  </div>
                </motion.div>
                <motion.div
                  className="boxcon"
                  initial={{
                    x: -1000,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 3.8,
                    duration: 1.5,
                  }}
                >
                  <motion.img
                    src={git}
                    alt="GitHub"
                    width="50"
                    whileHover={imgAnimation.whileHover}
                  />
                  <div>
                    <h2>Git:-</h2>
                    <p>github.com/AshwinSharma76</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          className="rightdiv"
          initial={{
            y: -1000,
          }}
          animate={{
            backgroundColor: "black",
            y: 0,
            borderRadius: ["20px", "10px", "5px", "10px", "20px"],
            borderColor: ["white"],
            borderWidth: 2,
            boxShadow: [
              "0 0 4px 2px blue", // blur-radius 4px
              "0 0 2px 1px blue",
              "0 0 5px 2px blue",
            ],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeatType: "reverse",
            borderWidth: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
            borderRadius: {
              duration: 3,
              repeat: Infinity,
            },
          }}
        >
          <div className="headerDiv">
            <div className="HeaderText">
              <motion.h1
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 4,
                  duration: 1.5,
                }}
              >
                {head[value]}
              </motion.h1>
              <div
                style={{
                  marginTop: "8px",
                  height: 0.5,
                  width: "50%",
                  backgroundColor: "blue",
                  borderRadius: 50,
                }}
              ></div>
            </div>
            <motion.div
              className="headerInner"
              initial={{
                x: "-1000%",
              }}
              animate={{
                x: 0,
              }}
              transition={{
                delay: 3.2,
                duration: 1,
              }}
            >
              <motion.p
                whileHover={{ scale: 1.1, rotate: 3, y: -5 }}
                onClick={() => changePage(0)}
                style={value === 0 ? { color: "blue" } : { color: "white" }}
              >
                About
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1, rotate: 3, y: -5 }}
                onClick={() => changePage(1)}
                style={value === 1 ? { color: "blue" } : { color: "white" }}
              >
                Resume
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1, rotate: 3, y: -5 }}
                onClick={() => changePage(2)}
                style={value === 2 ? { color: "blue" } : { color: "white" }}
              >
                Projects
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1, rotate: 3, y: -5 }}
                onClick={() => changePage(3)}
                style={value === 3 ? { color: "blue" } : { color: "white" }}
              >
                Contact
              </motion.p>
            </motion.div>
          </div>
          {widgets[value]}
        </motion.div>
      </div>
    </>
  );
};
