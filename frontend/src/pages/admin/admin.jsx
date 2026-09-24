import React from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="admin-dashboard">

      {/* Sidebar */}
      <aside className="admin-sidebar">

        <h2 className="admin-logo">Admin Panel</h2>

        <nav>
          <button className="active">
            📊 Dashboard
          </button>

          <button>
            📦 Products
          </button>

          <button>
            🛒 Orders
          </button>

          <button>
            👥 Users
          </button>
        </nav>

        <button className="logout-btn" onClick={logout}>
          🚪 Logout
        </button>

      </aside>

      {/* Main Content */}
      <main className="admin-main">

        <div className="admin-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Admin</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="stats-container">

          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div>
              <p>Total Users</p>
              <h2>1,250</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div>
              <p>Total Products</p>
              <h2>350</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🛒</div>
            <div>
              <p>Total Orders</p>
              <h2>856</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div>
              <p>Total Revenue</p>
              <h2>₹2,45,600</h2>
            </div>
          </div>

        </div>

        {/* Recent Orders */}
        <div className="recent-orders">

          <div className="section-header">
            <h2>Recent Orders</h2>

            <button onClick={() => navigate("/admin/orders")}>
              View All
            </button>
          </div>

          <table>

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>#ORD001</td>
                <td>John</td>
                <td>₹1,250</td>
                <td>
                  <span className="status delivered">
                    Delivered
                  </span>
                </td>
              </tr>

              <tr>
                <td>#ORD002</td>
                <td>Rahul</td>
                <td>₹2,500</td>
                <td>
                  <span className="status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>#ORD003</td>
                <td>Priya</td>
                <td>₹850</td>
                <td>
                  <span className="status cancelled">
                    Cancelled
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
};

export default AdminDashboard;
