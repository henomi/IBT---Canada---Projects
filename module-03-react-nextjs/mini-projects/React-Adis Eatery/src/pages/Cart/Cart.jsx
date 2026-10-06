import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  } = useContext(CartContext);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCheckout = (event) => {
    event.preventDefault();

    alert(
      `Thank you ${customer.name}! Your order is ready for checkout.`
    );
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <section className="cart-heading">
          <p>YOUR ORDER</p>
          <h1>Your cart</h1>
          <span>Review your selected dishes before ordering.</span>
        </section>

        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h2>Your cart is empty</h2>

          <p>
            Looks like you haven't added anything to your
            order yet.
          </p>

          <Link
            to="/menu"
            className="continue-shopping"
          >
            Explore Our Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* 
          HEADING
       */}

      <section className="cart-heading">
        <p>YOUR ORDER</p>

        <h1>Your cart</h1>

        <span>
          Review your dishes and provide your order details.
        </span>
      </section>

      {/* 
          CART CONTENT
       */}

      <div className="cart-content">

        {/* LEFT SIDE */}
        <div>
            <div className="cart-items-header">

                <p>
                    {cart.length}{" "}
                    {cart.length === 1 ? "item" : "items"} in your cart
                </p>

                <button
                    className="clear-cart-button"
                    onClick={() => {
                    const confirmed = window.confirm(
                        "Are you sure you want to remove all items from your cart?"
                    );

                    if (confirmed) {
                        clearCart();
                    }
                    }}
                >
                    Clear Cart
                </button>

            </div>

          {/* Cart Items */}
          <div className="cart-items">

            {cart.map((item) => (
              <article
                className="cart-item"
                key={item.id}
              >

                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="cart-item-info">

                  <h3>{item.name}</h3>

                  <p>{item.category}</p>

                  <span className="cart-item-price">
                    {item.price} ETB
                  </span>

                </div>

                <div className="cart-item-actions">

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                  <span className="cart-item-total">
                    {item.price * item.quantity} ETB
                  </span>

                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </article>
            ))}

          </div>

          {/* Customer Information */}
          <section className="customer-section">

            <div className="customer-heading">
              <p className="section-label">
                ORDER DETAILS
              </p>

              <h2>Where should we deliver?</h2>

              <span>
                Enter your information so we can prepare
                your order.
              </span>
            </div>

            <form
              className="customer-form"
              onSubmit={handleCheckout}
            >

              <div className="customer-form-row">

                <div className="customer-field">
                  <label htmlFor="customer-name">
                    Full Name
                  </label>

                  <input
                    id="customer-name"
                    type="text"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="customer-field">
                  <label htmlFor="customer-phone">
                    Phone Number
                  </label>

                  <input
                    id="customer-phone"
                    type="tel"
                    name="phone"
                    value={customer.phone}
                    onChange={handleChange}
                    placeholder="+251 ..."
                    required
                  />
                </div>

              </div>

              <div className="customer-field">

                <label htmlFor="customer-address">
                  Delivery Address
                </label>

                <input
                  id="customer-address"
                  type="text"
                  name="address"
                  value={customer.address}
                  onChange={handleChange}
                  placeholder="Enter your delivery address"
                  required
                />

              </div>

              <div className="customer-field">

                <label htmlFor="customer-notes">
                  Order Notes
                  <span className="optional">
                    Optional
                  </span>
                </label>

                <textarea
                  id="customer-notes"
                  name="notes"
                  value={customer.notes}
                  onChange={handleChange}
                  placeholder="Any special instructions?"
                  rows="4"
                />

              </div>

              <button
                type="submit"
                className="checkout-button mobile-checkout"
              >
                Continue to Checkout
              </button>

            </form>

          </section>

        </div>

        {/* RIGHT SIDE */}
        <aside className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>{cartTotal} ETB</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>Calculated later</span>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <span>Included</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>{cartTotal} ETB</span>
          </div>

          <button
            type="button"
            className="checkout-button"
            onClick={() =>
              document
                .querySelector(".customer-section")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Continue to Checkout
          </button>

          <Link
            to="/menu"
            className="back-to-menu"
          >
            ← Continue Shopping
          </Link>

        </aside>

      </div>
    </div>
  );
}

export default Cart;