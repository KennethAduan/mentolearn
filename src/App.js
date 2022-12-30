import HomePage from "./Components/HomePage/home.jsx";
import FooterPage from "./Components/Footer/footer.jsx";
import AboutPage from "./Components/Footer/About.jsx";
import UserPage from "./Components/Footer/UserAgree.jsx";
import GuestPage from "./Components/Footer/Guest.jsx";
import Selection from "./Pages/Register/Selection.jsx";
import Student from "./Pages/Register/Student.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/guest" element={<GuestPage />} />
        <Route path="/userAgree" element={<UserPage />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/student" element={<Student />} />
      </Routes>
      <FooterPage />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
