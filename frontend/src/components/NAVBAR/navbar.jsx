import { NavLink } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <h3 id="logo">ShopEasy</h3>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
        />
        <button type="button">Search</button>
      </div>

      <NavLink to="/" end>HOME</NavLink>
      <NavLink to="/products">PRODUCTS</NavLink>
      <NavLink to="/category">CATEGORIES</NavLink>
      <NavLink to="/cart">CART</NavLink>
      <NavLink to="/login">LOGIN</NavLink>
      <NavLink to="/register">REGISTER</NavLink>
      <NavLink to="/profile">MY PROFILE</NavLink>
      <NavLink to="/orders">MY ORDERS</NavLink>
    </nav>
  );
}