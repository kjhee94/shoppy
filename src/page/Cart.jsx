import React from "react";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { FaPlusCircle, FaEquals } from "react-icons/fa";
import Button from "../components/ui/Button";
import useCarts from "../hooks/useCarts";

const DELIVERY = 3000;
export default function Cart() {
  const {
    cartsQuery: { isLoading, data: products },
  } = useCarts();

  if (isLoading) {
    return <p>...Loading</p>;
  }

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className="p-4 flex flex-col">
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul className="border-b border-gray-300 pb-6 mb-6">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex justify-between items-center mb-6 px-2">
            <PriceCard
              text="상품 총액"
              price={totalPrice.toLocaleString("ko-KR")}
            />
            <FaPlusCircle llPlusCircleFill className="shrink-0" />
            <PriceCard text="배송비" price={DELIVERY.toLocaleString("ko-KR")} />
            <FaEquals className="shrink-0" />
            <PriceCard
              text="총 가격"
              price={(totalPrice + DELIVERY).toLocaleString("ko-KR")}
            />
          </div>
          <Button text="주문하기" />
        </>
      )}
    </section>
  );
}
