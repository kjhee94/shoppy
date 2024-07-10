import React from "react";
import { FaShopify } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-[55px] px-4 mb-4 flex items-center justify-between">
      <Link to="/" className="flex items-center text-brand">
        <FaShopify className="text-2xl" />
        <h2 className="pl-1 mt-1 text-2xl ">Shoppy</h2>
      </Link>
      <nav className="flex items-center gap-2 font-semibold">
        <Link to="/products" className="p-2">Products</Link>
        <Link to="/carts" className="p-2">Cart</Link>
        <Link to="/products/new" className="p-2">
          <FaPencilAlt />
        </Link>
        <button className="font-semibold">Login</button>
      </nav>
    </header>
  );
}
