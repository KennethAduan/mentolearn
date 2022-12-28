import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/home.jsx";

import About from "./Components/Footer/About.jsx";
import Guest from "./Components/Footer/Guest.jsx";
import UserAgree from "./Components/Footer/UserAgree.jsx";
import "./index.css";

function App() {
  return (
    <div className="App-container min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="guest" element={<Guest />} />
        <Route path="userAgree" element={<UserAgree />} />
      </Routes>
    </div>
  );
}

export default App;
