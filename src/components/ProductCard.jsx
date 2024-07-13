import React from "react";

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <li className="mb-4 cursor-pointer">
      <div className="w-full aspect-[3/4] overflow-hidden">
        <img className="w-full h-full" src={image} alt={title} />
      </div>
      <div className="mt-2 px-2 text-sm">
        <p className="opacity-60">{category}</p>
        <p className="font-semibold py-1">{title}</p>
        <p className="font-semibold opacity-80">
          {price.toLocaleString("ko-KR")}
        </p>
      </div>
    </li>
  );
}
