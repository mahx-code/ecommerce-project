import "./HomePage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
import Header from "../../components/Header.jsx";
import ProductsGrid from "./ProductsGrid.jsx";
// import { products } from "../../starting-code/ecommerce-project-main/data/products.js";

export default function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("api/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" href="images/home-favicon.png" />
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
