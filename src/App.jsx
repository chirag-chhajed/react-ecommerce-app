import React, { useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header/>
      <Main/>
    </>
  );
}

export default App;
