import { useContext, useState } from "react";
import CartContext from "../../context/CartContext/CartContext";
import "./DishCard.css";

function DishCard({ dish }) {
  const { addToCart, favorites, toggleFavorite } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const isFavorite = favorites.some(
  (item) => item.id === dish.id
);

  const handleAddToCart = () => {
    addToCart(dish);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <article className="dish-card">

      {/* Image */}
      <div className="dish-image-container">

        <img
          src={dish.image}
          alt={dish.name}
          className="dish-image"
        />

        <button
            className={`favorite-button ${
                isFavorite ? "favorite-active" : ""
            }`}
            onClick={() => toggleFavorite(dish)}
            aria-label={
                isFavorite
                ? `Remove ${dish.name} from favorites`
                : `Add ${dish.name} to favorites`
            }
            >
            {isFavorite ? "♥" : "♡"}
        </button>

        <div className="dish-badges">
          <span className="category-badge">
            {dish.category}
          </span>

          {dish.spicy && (
            <span className="spicy-badge">
              🌶️ Spicy
            </span>
          )}
        </div>

      </div>

      {/* Content */}
      <div className="dish-content">

        <div className="dish-header">
          <h3>{dish.name}</h3>

          <span className="dish-price">
            {dish.price} ETB
          </span>
        </div>

        <p className="dish-description">
          {dish.description}
        </p>

        <button
          className={`add-cart-button ${
            added ? "added" : ""
          }`}
          onClick={handleAddToCart}
        >
          {added ? "✓ Added to Cart" : "Add to Cart"}
        </button>

      </div>

    </article>
  );
}

export default DishCard;