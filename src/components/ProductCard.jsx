import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="mb-4 cursor-pointer"
    >
      <div className="w-full aspect-[3/4] overflow-hidden">
        <img
          className="w-full h-full transition-all hover:scale-105"
          src={image}
          alt={title}
        />
      </div>
      <div className="mt-2 px-2 text-sm">
        <p className="opacity-60">{category}</p>
        <p className="font-semibold py-1 truncate">{title}</p>
        <p className="font-semibold opacity-80">
          {price.toLocaleString("ko-KR")}
        </p>
      </div>
    </li>
  );
}
