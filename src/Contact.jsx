import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="Outerdiv">
      <br />
      <div className="conInfoDiv">
        <div className="emaildiv">
          <h2>Email:</h2>
          <motion.p
            whileHover={{
              color: "#0637e7",
            }}
          >
            ashwinsharam76@gmail.com
          </motion.p>
        </div>
        <div className="numdiv">
          <h2>Phone:</h2>
          <motion.p
            whileHover={{
              color: "#0637e7",
            }}
          >
            +916267095464
          </motion.p>
        </div>
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
          maxLength={30}
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
