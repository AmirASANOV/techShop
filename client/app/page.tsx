"use client";
import React, { useEffect, useState } from "react";
import s from "./Products.module.scss";
import axios from "axios";
import CardItem from "@/components/CardItem/CardItem";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://66414aa9a7500fcf1aa007b0.mockapi.io/items")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <div className={s.wrapper}>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          background: "#eeefef",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1>Акция:</h1>
        <div>
          {
            <CardItem
              data={{
                id: 0,
                imageUrl: "/images/1",
                name: "Стиральная Машина BOSCH",
                price: 13000,
              }}
            />
          }
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ marginBottom: "20px" }}>Популярное:</h1>

        <div style={{ display: "flex", columnGap: "20px" }}>
          <CardItem
            key="3"
            data={{
              id: 0,
              imageUrl: "/images/7",
              name: "Посудомоечная Машина BOSCH",
              price: 13000,
            }}
          />
          <CardItem
            key="3"
            data={{
              id: 0,
              imageUrl: "/images/9",
              name: "Чайник Aceline",
              price: 9000,
            }}
          />
        </div>
      </div>

      <h1>Products:</h1>

      <div className={s.container}>
        {data.map((item: any) => (
          <CardItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
