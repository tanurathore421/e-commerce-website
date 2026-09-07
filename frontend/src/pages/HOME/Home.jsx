

import "./home.css";

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopEasy</h1>
          <p>
            Your one-stop destination for quality products at great prices.
          </p>

          <a href="/products" className="shop-btn">
            Shop Now
          </a>
        </div>
      </section>

      <section className="features">
        <h2>Why Shop With Us?</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Get your favorite products delivered quickly to your doorstep.</p>
          </div>

          <div className="feature-card">
            <h3>💰 Best Prices</h3>
            <p>Enjoy affordable prices and great deals on our products.</p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure Shopping</h3>
            <p>Your shopping experience is safe, simple, and secure.</p>
          </div>
        </div>
      </section>
    </div>
  );
}


