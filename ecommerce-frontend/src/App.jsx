import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage.jsx";
import CheckOutPage from "./pages/checkout/CheckOutPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
import NotFoundPage from "./pages/404Page.jsx";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("api/cart-items?expand=product").then((response) => {
      setCart(response.data);
      console.log("Cart data:", response.data);
    });
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route
          path="/checkout"
          element={<CheckOutPage cart={cart} setCart={setCart} />}
        />
        <Route path="order" element={<OrderPage cart={cart} />} />
        <Route path="tracking" element={<TrackingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
