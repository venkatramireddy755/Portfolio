import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";   // <-- import CSS

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Navbar />
        </div>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
