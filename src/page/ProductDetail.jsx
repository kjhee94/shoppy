import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import useCarts from "../hooks/useCarts";

export default function ProductDetail() {
  const {
    state: {
      product: { id, title, price, image, category, description, options },
    },
  } = useLocation();
  const { addOrUpdateItem } = useCarts();

  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        alert("제품이 장바구니에 추가되었습니다.");
      },
    });
  };

  return (
    <section className="p-4 flex flex-col md:flex-row">
      <img
        className="w-full sm:aspect-[3/4] overflow-hidden "
        src={image}
        alt={title}
      />
      <div className="w-full flex flex-col md:pl-4">
        <p className="text-sm opacity-60 pt-2 pb-0.5">{category}</p>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-xl font-semibold py-2 border-b border-gray-300">
          {price.toLocaleString("ko-KR")}
        </p>
        <p className="pt-2 pb-4">{description}</p>
        <div className="flex items-center">
          <select
            id="select"
            className="p-2 my-3 flex-1 border border-gray-300 outline-none"
            onChange={handleSelect}
            value={selected}
          >
            {options &&
              options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
          </select>
        </div>
        <Button text="장바구니에 추가" onClick={handleClick} />
      </div>
    </section>
  );
}
