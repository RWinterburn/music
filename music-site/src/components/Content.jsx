import React from "react";


function Content() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Have a question or want to work together? Reach out!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Content;
