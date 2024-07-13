import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useCarts from "../hooks/useCarts";

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";
export default function CartItem({
  product,
  product: { id, image, title, price, option, quantity },
}) {
  const { addOrUpdateItem, removeItem } = useCarts();

  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className="flex justify-between items-center mb-2">
      <img className="w-24 md:w-48 rounded-lg mr-4" src={image} alt={title} />
      <div className="flex-1 flex justify-between">
        <div className="basis-3/5 text-sm">
          <p className="font-semibold">{title}</p>
          <p className="font-semibold py-1">{price.toLocaleString("ko-KR")}</p>
          <p className="text-sm opacity-60">{option}</p>
        </div>
        <div className="text-xl flex items-center">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span className="px-2">{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
