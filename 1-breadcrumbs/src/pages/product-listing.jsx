import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // const sliceTrending = data.products.slice(0, 6);
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <h2>ProductListing</h2>
      <div className="product-grid">
        {products?.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <h3>${product.price}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
