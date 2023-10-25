import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState<boolean>(false);
  return (
    <div className={`${theme && "bg-[#121212]"} h-screen`}>
      <Header toggle={theme} setToggle={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
