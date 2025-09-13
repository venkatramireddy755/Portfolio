import "./About.css";
import resume from "../../assets/kapu venkatrami reddy.pdf"; // <- place your resume inside assets folder
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        {/* Left: Title */}
        <div className="about-left">
          <h2>About Me</h2>
          <p className="tagline">Get to know me better 👇</p>
        </div>

        {/* Right: Info */}
        <div className="about-right">
          <p>
            Hi, I'm <strong>Kapu Venkatrami Reddy (Venu) </strong>, a passionate
            <span className="highlight"> MERN Stack Developer</span> who enjoys
            building modern, responsive, and user-friendly web applications.
          </p>

          <p>
            I have graduated with a <strong>B.Tech from Parul University, Vadodara</strong>. 
            I am passionate about developing scalable and efficient applications that address real-world challenges and deliver meaningful impact.
          </p>


          <div className="skills">
            <h3>Tech Skills</h3>
            <ul>
              <li>HTML5 / CSS3 / JavaScript (ES6+)</li>
              <li>React.js & Node.js</li>
              <li>Express.js & MongoDB</li>
              <li>UI/UX basics & Responsive Design</li>
              <li>Python</li>
              <li>Mysql</li>
            </ul>
          </div>

          <div className="about-buttons">
            <Link to="/projects" className="btn">View My Project</Link>
            <a href={resume} download className="btn resume-btn">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
