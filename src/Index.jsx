import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import "@fontsource/kumbh-sans";
import mail from "./assets/mail.png";
import linkdin from "./assets/linkdin.png";
import git from "./assets/git.png";

export const Index = () => {
  let imgAnimation = {
    whileHover: {
      scale: 1.2,
    },
  };
  return (
    <>
      <div className="mainDiv">
        <motion.div
          style={{
            border: "solid",
            position: "relative",
          }}
          initial={{
            height: 0,
            width: 0,
            borderRadius: 0,
            backgroundColor: "red",
          }}
          animate={{
            height: "90vh",
            width: "25vw",
            borderRadius: "20px",
            backgroundColor: "black",
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
              y: -60,
              x: -90,
              borderRadius: "15px",
            }}
            transition={{
              duration: 2,
              delay: 3.1,
              ease: "easeOut",
            }}
          ></motion.div>

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
              top: "60%",
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
                  <p>ashwinsharma76@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
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
        ></motion.div>
      </div>
    </>
  );
};
