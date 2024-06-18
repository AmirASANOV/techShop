"use client";
import React from "react";
import BasketItem from "../../components/BasketItem/BasketItem";
import s from "./basket.module.scss";
import { useAppSelector } from "../../hooks/useSelector";

const Basket = () => {
  const selector = useAppSelector((state) => state.basketSlice.products);
  console.log(selector);
  return (
    <div className={s.wrapper}>
      <h1>Ваша корзина:</h1>

      {selector.map((item: any) => (
        <BasketItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Basket;
