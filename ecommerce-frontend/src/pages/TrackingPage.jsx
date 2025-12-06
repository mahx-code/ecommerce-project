import Header from "../components/Header";
import "./TrackingPage.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import OrderPage from "./orders/OrderPage";
import axios from "axios";
import dayjs from "dayjs";
export default function TrackingPage({ cart }) {
  const [order, setOrder] = useState(null);
  const { orderId, productId } = useParams();

  useEffect(() => {
    const getOrderData = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    };
    getOrderData();
  }, [orderId]);
  if (!order) {
    return null;
  }
  const orderProduct = order.products.find((p) => p.productId === productId);
  console.log(orderProduct);
  if (!orderProduct) {
    return <div>Product not found</div>;
  }
  const productDetails = orderProduct.product;

  const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  const deliveryProgressPercent = (timePassedMs / totalDeliveryTimeMs) * 100

  const isPreparing = deliveryProgressPercent < 33.33;
  const isShipped = deliveryProgressPercent >= 33.33 && deliveryProgressPercent < 100;
  const isDelivered = deliveryProgressPercent >= 100;
  return (
    <>
      <link rel="icon" href="images/tracking-favicon.png" />
      <title>Track Package</title>
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/order">
            View all orders
          </Link>

          <div className="delivery-date">
            {deliveryProgressPercent < 100 ? `Arriving on` : `Delivered on`} {dayjs(orderProduct.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
          </div>

          <div className="product-info">
            {productDetails.name}
          </div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img
            className="product-image"
            src="images/products/athletic-cotton-socks-6-pairs.jpg"
          />

          <div className="progress-labels-container">
            <div className={`progress-label ${isPreparing && 'current-status'}`}>Preparing</div>
            <div className={`progress-label ${isShipped && 'current-status'}`}>Shipped</div>
            <div className={`progress-label ${isDelivered && 'current-status'}`}>Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className={`progress-bar`} style={{ width: `${deliveryProgressPercent}%` }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
