import "./footer.css"
export function Footer(){
    return(
        <>
       <footer className="footer">
  <div className="footer-container">

    <div className="footer-section">
      <h2>ShopEase</h2>
      <p>Your one-stop shop for everything you need.</p>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/category">Categories</a>
      <a href="/login">Login</a>
    </div>

    <div className="footer-section">
      <h3>Customer Service</h3>
      <a href="/help">Help Center</a>
      <a href="/shipping">Shipping & Delivery</a>
      <a href="/returns">Returns & Refunds</a>
    </div>

    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>📧 ShopEase@email.com</p>
      <p>📞 +91 XXXXXXXXXX</p>
      <p>📍 India</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 ShopEase. All rights reserved.</p>
  </div>
</footer>
       
        </>
    )
}