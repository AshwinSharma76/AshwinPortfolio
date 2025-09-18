import { useEffect, useState } from "react";
import "./App.css";
import { LandingPage } from "./Rain";
import { Index } from "./Index";

function App() {
  const [n, updaten] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updaten((prev) => {
        if (prev === 2) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (n === 2) {
    return <Index />;
  } else {
    return <LandingPage />;
  }
}

export default App;
