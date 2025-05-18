import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/style.scss"; // ✅scss

// page
import Main from "./pages/Main";

// components
import { Loader } from "./components";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 예: 최소 2.5초 후 로딩 해제
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* {loading ? ( */}
      {/* <Loader /> */}
      {/* ) : ( */}
      <Main />
      {/* )} */}
    </>
  );
}

export default App;
