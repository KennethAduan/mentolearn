import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/home.jsx";
import Footer from "./Components/Footer/footer.jsx";
import About from "./Components/Footer/About.jsx";
import Guest from "./Components/Footer/Guest.jsx";
import UserAgree from "./Components/Footer/UserAgree.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="guest" element={<Guest />} />
        <Route path="userAgree" element={<UserAgree />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
