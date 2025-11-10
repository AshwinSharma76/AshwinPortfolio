import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(width);
  return width;
}
