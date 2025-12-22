import "./HomePage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router";
import { Link } from "react-router";
import Header from "../../components/Header.jsx";
import ProductsGrid from "./ProductsGrid.jsx";
// import { products } from "../../starting-code/ecommerce-project-main/data/products.js";

export default function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  useEffect(() => {
    const getProductData = async () => {
      if (search) {
        const response = await axios.get(
          `https://ecommerce-project-backend-omega.vercel.app/api/products?search=${search}`
        );
        setProducts(response.data);
        return;
      } else {
        const response = await axios.get(
          "https://ecommerce-project-backend-omega.vercel.app/api/products"
        );
        setProducts(response.data);
      }
    };

    getProductData();
  }, [search]);

  return (
    <>
      <link rel="icon" href="images/home-favicon.png" />
      <Header cart={cart} search={search} />

      <div className="home-page">
        <ProductsGrid
          data-testid="productContainers"
          products={products}
          loadCart={loadCart}
        />
      </div>
    </>
  );
}
