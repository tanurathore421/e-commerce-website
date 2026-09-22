import "./ProductList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/products/all",
      );

      setProducts(response.data);
    } catch (error) {
      console.log("GET PRODUCTS ERROR:", error);
      alert("Unable to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  //add to cart function
  const addToCart = (product) => {
    // Get existing cart
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check product already exists
    const existingProduct = existingCart.find(
      (item) => item._id === product._id,
    );

    let updatedCart;

    if (existingProduct) {
      // Increase quantity
      updatedCart = existingCart.map((item) =>
        item._id === product._id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    } else {
      // Add new product
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("Product added to cart!");

    navigate("/cart");
  };

  // place order function
  const handleBuy = async (product) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/orders/orders",
        {
          productId: product._id,
          quantity: 1,
          price: product.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // Show backend message
      if (response.status === 200) {
        alert(response.data.message);
        navigate("/orders");
      }

      if (response.status === 201) {
        alert("Order placed successfully");
        navigate("/orders");
      }
    } catch (err) {
      console.error(
        "Error placing order:",
        err.response?.status,
        err.response?.data || err.message,
      );

      if (err.response?.status === 401) {
        alert("Your login session has expired. Please login again.");
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        alert("Failed to place order");
      }
    }
  };

  return (
    <div className="product-page">
      <h1>Our Products</h1>

      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h2>{product.name}</h2>

            <p className="price">₹ {product.price}</p>

            <button className="details-btn" onClick={() => handleBuy(product)}>
              Buy Now
            </button>

            <button className="cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
