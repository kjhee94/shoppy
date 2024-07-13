import React, { useState } from "react";
import Products from "../components/Products";

//백에서 공통코드를 불러오는 작업이 있어야하나 일단 하드 코딩
const categorys = ["All", "Top", "Bottom", "Outer", "One-piece"];
export default function Product() {
  const [category, setCategory] = useState(categorys[0]);

  return (
    <section>
      <ul className="flex m-4">
        {categorys.map((value, index) => (
          <li className="mr-2" key={index}>
            <button
              className={`py-1 px-3 rounded-full ${
                category === value ? "bg-brand border-brand text-white" : "border border-gray-300 "
              }`}
              onClick={() => {
                setCategory(value);
              }}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      <Products category={category} />
    </section>
  );
}
