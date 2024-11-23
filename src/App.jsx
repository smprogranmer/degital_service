import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Logo from "./page/Logo";
import Footer from "./components/Footer";
import Contact from "./page/Contact";
// import Contact from "./page/Contact.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/about" element={<Abou
        t />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
