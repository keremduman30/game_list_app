import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";
function App() {
  const [theme, setTheme] = useState<boolean>(false);
  useEffect(() => {
    setTheme(localStorage.getItem("theme") === "d" ? true : false);
  }, []);

  return (
    <div
      className={`${theme && "dark"} ${theme && "bg-[#121212]"} min-h-screen`}
    >
      <Header toggle={theme} setToggle={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
