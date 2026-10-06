import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Adis Eatery
          </Link>

          <p>
            A taste of Ethiopia, served with warmth,
            tradition, and love.
          </p>

          <div className="footer-socials">
            <a href="#facebook" aria-label="Facebook">
              f
            </a>

            <a href="#instagram" aria-label="Instagram">
              ◎
            </a>

            <a href="#telegram" aria-label="Telegram">
              ➤
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/menu">Our Menu</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>📍 Addis Ababa, Ethiopia</p>
          <p>📞 +251 900 000 000</p>
          <p>✉️ hello@adiseatery.com</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-column">
          <h3>Opening Hours</h3>

          <p>Monday – Sunday</p>
          <p>9:00 AM – 10:00 PM</p>

          <span className="footer-status">
            ● Open every day
          </span>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {currentYear} Adis Eatery. All rights reserved.
        </p>

        <p>
          Made with ❤️ in Ethiopia
        </p>

      </div>

    </footer>
  );
}

export default Footer;