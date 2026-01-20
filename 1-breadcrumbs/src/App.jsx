import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductListing from "./pages/product-listing";
import ProductDetails from "./pages/product-details";
import Breadcrumbs from "./components/breadcrumbs";

function App() {
  return (
    <BrowserRouter>
      <h1> RoadsideCoder Store</h1>
      {/* Breadcrumbs */}
      <Breadcrumbs />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
