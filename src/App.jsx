import { Routes, Route } from "react-router";

import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import CheckOutPage from "./pages/CheckOutPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path='order' element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;
