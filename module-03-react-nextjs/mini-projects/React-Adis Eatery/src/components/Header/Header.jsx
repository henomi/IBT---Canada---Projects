import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import CartContext from "../../context/CartContext/CartContext";
import "./Header.css";

function Header() {
  const { cartCount, favorites } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">

      <div className="header-inner">

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <h1>Adis Eatery</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navigation">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/menu">
            Menu
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/contact">
            Contact Us
          </NavLink>
        </nav>

        <Link
        to="/favorites"
        className="favorites-button"
        aria-label={`Favorites with ${favorites.length} saved dishes`}
        >
        <span className="favorites-icon">♡</span>

        <span className="favorites-count">
            {favorites.length}
        </span>
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="cart-button"
          onClick={closeMenu}
          aria-label={`Shopping cart with ${cartCount} items`}
        >
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-navigation ${menuOpen ? "show" : ""}`}>

        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/menu" onClick={closeMenu}>
          Menu
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact Us
        </NavLink>

        <NavLink
        to="/favorites"
        onClick={closeMenu}
        >
        Favorites
        <span className="mobile-cart-count">
            {favorites.length}
        </span>
        </NavLink>

        <NavLink to="/cart" onClick={closeMenu}>
          Cart
          <span className="mobile-cart-count">
            {cartCount}
          </span>
        </NavLink>

      </nav>

    </header>
  );
}

export default Header;