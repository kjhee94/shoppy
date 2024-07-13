import React from "react";
import { FaShopify } from "react-icons/fa6";
import { HiOutlineShoppingBag, HiOutlinePencil } from "react-icons/hi2";
import { Link } from "react-router-dom";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";

export default function Header() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="w-full h-[65px] px-4 flex items-center justify-between border-b border-b-gray-200">
      <Link to="/" className="flex items-center text-brand">
        <FaShopify className="text-2xl" />
        <h2 className="pl-1 mt-1 text-3xl ">Shoppy</h2>
      </Link>
      <nav className="flex items-center gap-3 font-semibold">
        <Link to="/products">Product</Link>
        {user && (
          <Link to="/carts" className="p-2 rounded-full hover:bg-gray-200">
            <HiOutlineShoppingBag className="text-xl " />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link
            to="/products/new"
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <HiOutlinePencil className="text-xl" />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text="Login" onClick={login} />}
        {user && <Button text="Logout" onClick={logout} />}
      </nav>
    </header>
  );
}
