import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="Outerdiv">
      <br />
      <div className="conInfoDiv">
        <motion.div
          className="emaildiv"
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }} // x animates once
        >
          {/* inner div handles infinite y loop */}
          <motion.div
            animate={{ y: [5, 0, 5] }}
            transition={{
              delay: 1,
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h2>Email:</h2>
            <motion.p whileHover={{ color: "#0637e7" }}>
              ashwinsharam76@gmail.com
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          className="emaildiv"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }} // x animates once
        >
          {/* inner div handles infinite y loop */}
          <motion.div
            animate={{ y: [5, 0, 5] }}
            transition={{
              delay: 1.5,
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h2> Phone::</h2>
            <motion.p whileHover={{ color: "#0637e7" }}>+916267095464</motion.p>
          </motion.div>
        </motion.div>
      </div>

      <div className="formDiv">
        <h1>Contact Me</h1>
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <textarea
          type="text"
          placeholder="Message"
          minLength={4}
          maxLength={60}
        ></textarea>
        <br />

        <div>
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              x: 50,
            }}
          >
            Submit
          </motion.button>
        </div>
      </div>
    </div>
  );
}
