import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import "./OrderPage.css";
import { Link } from "react-router";
import Header from "../../components/Header.jsx";
import OrdersGrid from "./OrdersGrid.jsx";

export default function OrderPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrdersData = async () => {
      const response = await axios.get("api/orders?expand=products");
      setOrders(response.data)
    }
    getOrdersData()
  }, []);

  return (
    <>
      <link rel="icon" href="images/orders-favicon.png" />
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
