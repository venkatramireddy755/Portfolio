import './Footer.css'
// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-8">
      <p>© {new Date().getFullYear()} Venu | All Rights Reserved</p>
      
      <div className="footer-links">
        <a href="https://github.com/" target="_blank">GitHub</a>
        <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
        <a href="mailto:me@example.com">Email</a>
      </div>
    </footer>
  );
}
export default Footer;
