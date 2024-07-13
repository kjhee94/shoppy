import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import useCarts from "../hooks/useCarts";

export default function CartStatus() {
  const {
    cartsQuery: { data: products },
  } = useCarts();

  return (
    <div className="relative">
      <HiOutlineShoppingBag className="text-xl " />
      {products && (
        <p className="w-4 h-4 absolute -top-2 -right-3 bg-brand text-xs text-white text-center rounded-full font-thin">
          {products.length}
        </p>
      )}
    </div>
  );
}
