import "./checkout/CheckOutPage.css";
import Header from "../components/Header";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <>
      <title>404 Not Found</title>
          <Header />
          
        <div className="not-found-page">
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link to="/">Go back to Home</Link>
        </div>
    </>
  );
}
