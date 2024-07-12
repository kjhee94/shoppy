import React from "react";
import { FaShopify } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { HiOutlineShoppingBag, HiOutlinePencil  } from "react-icons/hi2";
import { Link } from "react-router-dom";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";

export default function Header() {
  const {user, login, logout} = useAuthContext();

  return (
    <header className="w-full h-[65px] px-4 flex items-center justify-between border-b border-b-gray-200">
      <Link to="/" className="flex items-center text-brand">
        <FaShopify className="text-2xl" />
        <h2 className="pl-1 mt-1 text-3xl ">Shoppy</h2>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Product</Link>
        {user && <Link to="/carts"><HiOutlineShoppingBag classname="text-lg" /></Link>}
        {user && user.isAdmin && (
          <Link to="/products/new">
            <HiOutlinePencil  />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text="Login" onClick={login} />}
        {user && <Button text="Logout" onClick={logout} />}
      </nav>
    </header>
  );
}
