import React, { useEffect, useState } from "react";
import { FaShopify } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <header className="w-full h-[55px] px-4 mb-4 flex items-center justify-between">
      <Link to="/" className="flex items-center text-brand">
        <FaShopify className="text-2xl" />
        <h2 className="pl-1 mt-1 text-2xl ">Shoppy</h2>
      </Link>
      <nav className="flex items-center gap-2 font-semibold">
        <Link to="/products" className="p-2">
          Products
        </Link>
        <Link to="/carts" className="p-2">
          Cart
        </Link>
        <Link to="/products/new" className="p-2">
          <FaPencilAlt />
        </Link>
        {!user && (
          <button
            className="font-semibold bg-brand p-2 rounded-lg text-white"
            onClick={login}
          >
            Login
          </button>
        )}
        {user && (
          <button onClick={logout}>
            <User user={user}></User>
          </button>
        )}
      </nav>
    </header>
  );
}
