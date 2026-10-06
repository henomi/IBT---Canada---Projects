import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext/CartContext";
import "./Favorites.css";

function Favorites() {
  const {
    favorites,
    toggleFavorite,
    addToCart,
  } = useContext(CartContext);

  if (favorites.length === 0) {
    return (
      <div className="favorites-page">

        <section className="favorites-heading">
          <p>YOUR FAVORITES</p>

          <h1>Saved with love.</h1>

          <span>
            Keep your favorite dishes close so you can
            find them again anytime.
          </span>
        </section>

        <section className="empty-favorites">

          <div className="empty-favorites-icon">
            ♡
          </div>

          <h2>No favorites yet</h2>

          <p>
            Tap the heart on any dish you love and
            it will appear here.
          </p>

          <Link
            to="/menu"
            className="favorites-menu-button"
          >
            Explore Our Menu
          </Link>

        </section>

      </div>
    );
  }

  return (
    <div className="favorites-page">

      <section className="favorites-heading">
        <p>YOUR FAVORITES</p>

        <h1>Saved with love.</h1>

        <span>
          Your favorite dishes, all in one place.
        </span>
      </section>

      <section className="favorites-container">

        <div className="favorites-top">

          <p>
            <strong>{favorites.length}</strong>{" "}
            {favorites.length === 1
              ? "favorite dish"
              : "favorite dishes"}
          </p>

          <Link
            to="/menu"
            className="browse-menu-link"
          >
            Browse Menu →
          </Link>

        </div>

        <div className="favorites-grid">

          {favorites.map((dish) => (

            <article
              className="favorite-card"
              key={dish.id}
            >

              <div className="favorite-image">

                <img
                  src={dish.image}
                  alt={dish.name}
                />

                <button
                  className="favorite-remove"
                  onClick={() =>
                    toggleFavorite(dish)
                  }
                  aria-label={`Remove ${dish.name} from favorites`}
                >
                  ♥
                </button>

              </div>

              <div className="favorite-content">

                <div className="favorite-title">

                  <h3>{dish.name}</h3>

                  <span>
                    {dish.price} ETB
                  </span>

                </div>

                <p className="favorite-category">
                  {dish.category}
                </p>

                <p className="favorite-description">
                  {dish.description}
                </p>

                <button
                  className="favorite-cart-button"
                  onClick={() => addToCart(dish)}
                >
                  Add to Cart
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Favorites;