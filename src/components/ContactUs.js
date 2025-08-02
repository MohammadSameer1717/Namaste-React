import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-form-box">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you. Fill out the form below to get in touch!
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-side-info">
        <h3>Need Help?</h3>
        <p>Email: support@yourwebsite.com</p>
        <p>Phone: +91 12345 67890</p>
        <p>Hours: Mon-Fri, 9am-5pm</p>
      </div>
    </div>
  );
};

export default ContactUs;