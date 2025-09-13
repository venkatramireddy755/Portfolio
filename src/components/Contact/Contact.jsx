// src/components/Contact/Contact.jsx
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p className="subtitle">Feel free to reach out by filling this form 👇</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Write your message..." required></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
