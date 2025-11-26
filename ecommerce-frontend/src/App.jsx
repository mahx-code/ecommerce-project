import { Routes, Route } from "react-router";
import {useState, useEffect} from "react";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import CheckOutPage from "./pages/CheckOutPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
import NotFoundPage from "./pages/404Page.jsx";
import axios from "axios";



function App() {
  const [cart, setCart] = useState([]);
  useEffect(
    () => {
      axios.get("api/cart-items").then((response) => {
        setCart(response.data);
        console.log("Cart data:", response.data);
      });
    }, []
  )
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<CheckOutPage cart={cart} />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="tracking" element={<TrackingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
