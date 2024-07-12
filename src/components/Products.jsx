import React from "react";
import { getProducts } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

export default function Products({category}) {
  const { isLoading, error, data: products, } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const filtered = getFilteredItems(products, category);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 m-4 gap-4">
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
