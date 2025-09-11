import { motion } from "framer-motion";
import "@fontsource/balsamiq-sans"; // default weight 400

const child = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: { opacity: 1 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: i * 0, // initial delay if needed
    },
  }),
};

export const Typewriter = ({ text }) => {
  const letters = Array.from(text);

  return (
    <motion.h1
      style={{
        display: "flex",
        overflow: "hidden",
        whiteSpace: "pre",
        fontFamily: "Balsamiq Sans, cursive",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
      key={text} // re-render to loop
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 1 }}
        >
          {letter === " " ? "\u00A0" : letter} {/* preserve spaces */}
        </motion.span>
      ))}
    </motion.h1>
  );
};
