import React from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

export default function Products({ category }) {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  const filtered = getFilteredItems(products, category);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-4 gap-4">
        {filtered &&
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}

function getFilteredItems(products, category) {
  if (category === "All") {
    return products;
  }
  return products.filter((product) => product.category === category);
}
