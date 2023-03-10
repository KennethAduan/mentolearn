import HomePage from "./Components/HomePage/home.jsx";

import AboutPage from "./Components/Footer/About.jsx";
import UserPage from "./Components/Footer/UserAgree.jsx";
import GuestPage from "./Components/Footer/Guest.jsx";
import Selection from "./Pages/Register/Selection.jsx";
import Student from "./Pages/Register/Student/Student.jsx";
import ClickHere from "./Pages/Register/Mentor/ClickHere.jsx";
import Mentor from "./Pages/Register/Mentor/Mentor.jsx";
import RegistrationMentor from "./Pages/Register/Mentor/Registration.jsx";
import MainPage from "./Pages/Main/Main.jsx";
import ForgotPass from "./Components/HomePage/ForgotPassword/Forgot.jsx";
import Landing from "./Pages/Landing/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/guest" element={<GuestPage />} />
        <Route path="/userAgree" element={<UserPage />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/student" element={<Student />} />
        <Route path="/clickHere" element={<ClickHere />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/registrationMentor" element={<RegistrationMentor />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
      </Routes>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
