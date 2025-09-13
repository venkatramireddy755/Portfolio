// src/pages/Landing.jsx
import picture from "../../assets/Photo2.jpg"
import Contact from "../Contact/Contact.jsx";
import "./landingPage.css";
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div className="landing-container">


      <main className="landing-content">
        <div className="intro-section">
          {/* Left Card (Image) */}
          <div className="card profile-card">
            <img src={picture} alt="Venu" className="profile-pic" />
          </div>
          {/* Right Card (Info) */}
          <div className="card info-card">
            <h1>Hi, I'm Venkatrami Reddy👋</h1>
            <h2>MERN Stack Developer</h2>
            <p>
              Passionate about building modern, responsive, and user-friendly web applications.
              Welcome to my portfolio!
            </p>
            {/* <a href="/projects" className="btn">View My Work</a> */}
            <Link to="/projects" className="btn">View My Work</Link>

          </div>
        </div>
        <div className="card about-card">
          <h2>About Me</h2>
          <p><strong>Name:</strong> Kapu Venkatrami Reddy (Venu)</p>
          <p><strong>Education:</strong> B.Tech at Parul University, Vadodara</p>
          <p><strong>Tech Skills:</strong> HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Mysql</p>
        </div>
        <Contact />

      </main>

    </div>
  );
}

export default LandingPage;
