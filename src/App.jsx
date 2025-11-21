import { Routes, Route } from "react-router";

import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import CheckOutPage from "./pages/CheckOutPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </>
  );
}

export default App;
