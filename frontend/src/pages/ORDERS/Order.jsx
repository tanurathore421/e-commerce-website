import  { useEffect, useState } from "react";
import axios from "axios";
import "./Order.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

const fetchOrders = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:3000/api/orders/orders",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setOrders(response.data.orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="orders-page">
        <h1>My Orders</h1>
        <p>Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <div className="no-orders">
          <h2>No orders yet</h2>
          <p>Your previous orders will appear here.</p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => {
            const product = order.productId;

            return (
              <div className="order-card" key={order._id}>
                {product?.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="order-image"
                  />
                )}

                <div className="order-details">
                  <h2>{product?.name || "Product"}</h2>

                  <p>
                    <strong>Quantity:</strong> {order.quantity}
                  </p>

                  <p>
                    <strong>Status:</strong>{" "}
                    <span className="status">
                      {order.status}
                    </span>
                  </p>

                  <p>
                    <strong>Order ID:</strong> {order._id}
                  </p>

                  <p>
                    <strong>Ordered on:</strong>{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;
