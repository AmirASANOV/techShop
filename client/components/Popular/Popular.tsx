import React from "react";
import CardItem from "../CardItem/CardItem";
import s from "./Popular.module.scss";

const Popular = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Большой выбор стиральных машин</h1>
      <img className={s.tech} src="/images/popular/stir.png" alt="" />
    </div>
  );
};

export default Popular;
