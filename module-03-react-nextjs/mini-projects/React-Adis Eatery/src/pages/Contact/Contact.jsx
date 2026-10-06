import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form submitted:", formData);

    alert("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p>GET IN TOUCH</p>

          <h1>
            We'd love to
            <br />
            hear from you.
          </h1>

          <span>
            Have a question, feedback, or simply want to say hello?
            Reach out to Adis Eatery.
          </span>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">

        {/* Contact Information */}
        <div className="contact-info">

          <p className="section-label">CONTACT US</p>

          <h2>
            Let's talk about
            <br />
            good food.
          </h2>

          <p className="contact-intro">
            Whether you're planning a visit, asking about our menu,
            or sharing your experience, we're always happy to hear
            from you.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">📍</div>

              <div>
                <h3>Visit Us</h3>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">📞</div>

              <div>
                <h3>Call Us</h3>
                <p>+251 900 000 000</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">✉️</div>

              <div>
                <h3>Email Us</h3>
                <p>hello@adiseatery.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">🕐</div>

              <div>
                <h3>Opening Hours</h3>
                <p>Monday – Sunday</p>
                <p>9:00 AM – 10:00 PM</p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">

          <h2>Send us a message</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is your message about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>

          </form>
        </div>

      </section>

      {/* Visit Section */}
      <section className="contact-visit">

        <div>
          <p className="section-label">COME VISIT US</p>

          <h2>
            Good food is better
            <br />
            when shared.
          </h2>

          <p>
            Bring your friends, family, or someone special and enjoy
            the flavors of Ethiopia at Adis Eatery.
          </p>
        </div>

        <div className="contact-location-card">
          <span>🇪🇹</span>
          <h3>Adis Eatery</h3>
          <p>Addis Ababa, Ethiopia</p>
          <p>Open every day · 9:00 AM – 10:00 PM</p>
        </div>

      </section>

    </div>
  );
}

export default Contact;