import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <p className="hero-subtitle">
            WELCOME TO ADIS EATERY
          </p>

          <h1>
            Taste Ethiopia,
            <br />
            <span>Your Way.</span>
          </h1>

          <p className="hero-description">
            Discover authentic Ethiopian flavors, freshly prepared
            with passion and served with a modern dining experience.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="primary-button">
              Explore Menu
            </Link>

            <Link to="/about" className="secondary-button">
              Our Story
            </Link>
          </div>
        </div>

      </section>


      {/* Featured Section */}
      <section className="featured">

        <div className="section-heading">
          <p>OUR FAVORITES</p>
          <h2>Featured Dishes</h2>
          <span>
            A taste of what makes Adis Eatery special.
          </span>
        </div>


        <div className="featured-grid">

          <article className="featured-card">
            <div className="food-image food-one"></div>

            <div className="featured-info">
              <h3>Doro Wat</h3>
              <p>
                Traditional Ethiopian chicken stew
                served with injera.
              </p>

              <strong>240 ETB</strong>
            </div>
          </article>


          <article className="featured-card">
            <div className="food-image food-two"></div>

            <div className="featured-info">
              <h3>Kitfo</h3>
              <p>
                A classic Ethiopian dish prepared
                with seasoned minced beef.
              </p>

              <strong>320 ETB</strong>
            </div>
          </article>


          <article className="featured-card">
            <div className="food-image food-three"></div>

            <div className="featured-info">
              <h3>Tibs</h3>
              <p>
                Tender pieces of meat sautéed
                with Ethiopian spices.
              </p>

              <strong>280 ETB</strong>
            </div>
          </article>

        </div>


        <Link to="/menu" className="view-menu">
          View Full Menu →
        </Link>

      </section>


      {/* About Preview */}
      <section className="about-preview">

        <div className="about-image"></div>

        <div className="about-content">

          <p className="section-label">
            OUR STORY
          </p>

          <h2>
            Food that brings
            people together.
          </h2>

          <p>
            At Adis Eatery, we believe great food is more
            than just a meal. It is a way to connect,
            celebrate and create memories.
          </p>

          <p>
            We combine the richness of Ethiopian cuisine
            with a welcoming and modern dining experience.
          </p>

          <Link to="/about" className="text-link">
            Discover Our Story →
          </Link>

        </div>

      </section>


      {/* Why Adis Eatery */}
      <section className="why-us">

        <div className="section-heading">
          <p>THE ADIS EXPERIENCE</p>
          <h2>Why Adis Eatery?</h2>
        </div>


        <div className="features">

          <div className="feature">
            <div className="feature-icon">🌿</div>
            <h3>Fresh Ingredients</h3>
            <p>
              Carefully selected ingredients
              prepared fresh for every meal.
            </p>
          </div>


          <div className="feature">
            <div className="feature-icon">🍽️</div>
            <h3>Authentic Taste</h3>
            <p>
              Traditional Ethiopian flavors
              prepared with care and passion.
            </p>
          </div>


          <div className="feature">
            <div className="feature-icon">❤️</div>
            <h3>Made With Love</h3>
            <p>
              Every dish is prepared to give
              you an experience worth remembering.
            </p>
          </div>

        </div>

      </section>


      {/* Call To Action */}
      <section className="home-cta">

        <div>
          <p>READY TO EAT?</p>

          <h2>
            Your next favorite meal
            is waiting.
          </h2>

          <Link to="/menu" className="primary-button">
            Explore Our Menu
          </Link>
        </div>

      </section>

    </div>
  );
}

export default Home;