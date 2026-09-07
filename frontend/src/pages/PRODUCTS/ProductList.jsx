
import React from "react";
import "./ProductList.css";

function ProductList() {

  const products = [
    {
      id: 1,
      name: "Running Shoes",
      price: 999,
      image: "https://media.istockphoto.com/id/1153461934/photo/sport-sneakers-with-neon-light-minimalism-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=t8vP6ktqh9v5WctuZwxnCds564sDvzYYzM2MQlGAlSk="
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 1499,
      image: "https://images.unsplash.com/photo-1637160151663-a410315e4e75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 1999,
      image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww"
    },
    {
      id: 4,
      name: "Backpack",
      price: 799,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D"
    },
     {
      id: 5,
      name: " Chanel Perfume",
      price: 969,
      image: "https://images.unsplash.com/photo-1614179402100-5f4f3387f265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
    },
     {
      id: 6,
      name: "Lipgloss",
      price: 599,
      image: "https://images.unsplash.com/photo-1640317372997-b76e600ee5ef?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      id: 7,
      name: "Heels",
      price: 1499,
      image: "https://images.unsplash.com/photo-1519226719127-9e805abb99b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
    },
     {
      id: 8,
      name: "Sunglasses",
      price: 450,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      id: 9,
      name: "Shirt",
      price: 799,
      image: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww"
    },
     {
      id: 10,
      name: "Jacket",
      price: 2500,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <div className="product-page">

      <h1>Our Products</h1>

      <div className="product-container">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h2>{product.name}</h2>

            <p className="price">
              ₹ {product.price}
            </p>

            <button className="details-btn">
              View Details
            </button>

            <button className="cart-btn">
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProductList;

