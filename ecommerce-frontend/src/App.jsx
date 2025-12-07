import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage.jsx";
import CheckOutPage from "./pages/checkout/CheckOutPage.jsx";
import OrderPage from "./pages/orders/OrderPage.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
import NotFoundPage from "./pages/404Page.jsx";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route
          path="/checkout"
          element={<CheckOutPage cart={cart} setCart={setCart} loadCart={loadCart} />}
        />
        <Route path="order" element={<OrderPage cart={cart} />} />
        <Route
          path="tracking/:orderId/:productId"
          element={<TrackingPage cart={cart} />}
        />
        <Route path="*" element={<NotFoundPage cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
