import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p>ABOUT ADIS EATERY</p>

          <h1>
            More than a meal.
            <br />
            A taste of Ethiopia.
          </h1>

          <span>
            We bring traditional Ethiopian flavors, warm hospitality,
            and a modern dining experience together in one place.
          </span>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="about-story-image">
          <img
            src="/images/about-food.jpg"
            alt="Traditional Ethiopian food"
          />
        </div>

        <div className="about-story-content">
          <p className="section-label">OUR STORY</p>

          <h2>
            Food that brings
            <br />
            people together.
          </h2>

          <p>
            Adis Eatery was created with a simple idea: Ethiopian food
            should be enjoyed, shared, and remembered.
          </p>

          <p>
            From traditional dishes prepared with carefully selected
            ingredients to the warmth of Ethiopian hospitality, every
            part of our experience is inspired by the food and culture
            we love.
          </p>

          <p>
            Whether you're enjoying a meal with family, meeting friends,
            or discovering Ethiopian cuisine for the first time, we want
            every visit to feel special.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="about-culture">
        <div className="about-culture-content">
          <p className="section-label">ETHIOPIAN FOOD & CULTURE</p>

          <h2>
            A tradition worth
            <br />
            sharing.
          </h2>

          <p>
            Ethiopian cuisine is about more than individual dishes.
            It is about gathering around the table, sharing food, and
            creating moments with the people around you.
          </p>

          <p>
            Injera, flavorful stews, aromatic spices, and traditional
            coffee are all part of a food culture that turns a meal
            into an experience.
          </p>
        </div>

        <div className="about-culture-highlight">
          <span>🇪🇹</span>
          <h3>Made with Ethiopian spirit.</h3>
          <p>
            Authentic flavors. Warm hospitality. Shared experiences.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="about-values">
        <div className="about-values-heading">
          <p className="section-label">WHY ADIS EATERY</p>

          <h2>
            Simple values.
            <br />
            Great food.
          </h2>
        </div>

        <div className="values-grid">

          <article className="value-card">
            <div className="value-icon">🥘</div>
            <h3>Authentic Taste</h3>
            <p>
              We celebrate the rich flavors and traditions of Ethiopian
              cuisine.
            </p>
          </article>

          <article className="value-card">
            <div className="value-icon">🌿</div>
            <h3>Fresh Ingredients</h3>
            <p>
              We believe good food starts with quality ingredients and
              careful preparation.
            </p>
          </article>

          <article className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Made With Care</h3>
            <p>
              Every dish is prepared with attention to flavor,
              presentation, and the people enjoying it.
            </p>
          </article>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div>
          <p>READY TO TASTE ETHIOPIA?</p>

          <h2>
            Your next favorite
            <br />
            meal is waiting.
          </h2>

          <Link to="/menu" className="about-cta-button">
            Explore Our Menu
          </Link>
        </div>
      </section>

    </div>
  );
}

export default About;