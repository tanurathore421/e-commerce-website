
import { useEffect, useState } from "react";
import "./cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  // Get cart data
  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item._id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Remove item
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item._id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Total price
  const totalPrice = cart.reduce(
    (total, item) => {
      return total + item.price * item.quantity;
    },
    0
  );

  return (
    <div className="cart-page">

      <h1>Product Cart</h1>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <h2>Cart is Empty</h2>
          <p>Please add some products.</p>
        </div>

      ) : (

        <div className="cart-container">

          {/* Products */}

          <div className="cart-products">

            {cart.map((item) => (

              <div
                className="cart-card"
                key={item._id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-info">

                  <h2>{item.name}</h2>

                  <p>
                    Price: ₹ {item.price}
                  </p>

                  <div className="quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(item._id)
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item._id)
                      }
                    >
                     +
                     
                    </button>

                  </div>

                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(item._id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* Total */}

          <div className="cart-total">

            <h2>Order Summary</h2>

            <p>
              Total: ₹ {totalPrice}
            </p>

            <button className="checkout-button">
              Checkout
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;

