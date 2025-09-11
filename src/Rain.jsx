import "./App.css";
import { motion } from "framer-motion";
import { Typewriter } from "./TypeWriter";

export const Rain = ({ leftp = 10, duration = 1.5, size = 10 }) => {
  return (
    <>
      <motion.div
        className="drop"
        style={{ left: `${leftp}%`, width: `${size}px`, height: `${size}px` }}
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: "calc(100vh - 20px)", opacity: [1, 1, 0] }}
        transition={{
          duration: duration,
          ease: "easeIn",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      <motion.div
        className="ripple"
        style={{
          left: `${leftp}%`,
          bottom: `${size}%`,
          width: `${size * 2.5}px`,
          height: `${(size * 2.5) / 4}px`,
        }}
        initial={{ scale: 0.2, opacity: 0.5 }}
        animate={{ scale: size / 2, opacity: 0 }}
        transition={{
          duration: 1.2,
          delay: duration, // <-- sync ripple to drop duration
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeOut",
        }}
      />
    </>
  );
};

const random10 = () => {
  const min = 1;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1) + min) * 10; // 10,20,...100
};

const randomBetween8and15 = () => {
  const min = 5;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function LandingPage() {
  const dropsArray = Array.from({ length: 30 }); // 10 drops
  return (
    <>
      <div className="container">
        {dropsArray.map((_, i) => {
          const left = random10(); // 10-100%
          const dura = randomBetween8and15() / 10; // 0.8 - 1.5 sec
          const size = randomBetween8and15(); // drop size
          return <Rain key={i} leftp={left} duration={dura} size={size} />;
        })}
      </div>
      <div className="middiv">
        <Typewriter text={"ASHWIN SHARMA"} />
      </div>
    </>
  );
}
