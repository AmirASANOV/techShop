import React from "react";
import Description from "../Description/Description";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <Description />

      <div className={s.info}>
        <div>
          <img src="/images/logoHeader.svg" alt="" />
          <p>+7(495)150-95-55</p>
          <p>
            ООО БТ МАРКЕТ, ИНН7728483067 Москва, пр-д Соловьиный д. 2, ком. 1
          </p>
        </div>
        <div>
          <p>Как оформить заказ</p>
          <p>Оплата</p>
          <p>Доставка</p>
          <p>Прием товара</p>
          <p>Почему покупать у нас</p>
        </div>
        <div>
          <p>Контакты</p>
          <p>О компании</p>
          <p>Юридическая информация</p>
          <p>Для поставщиков</p>
          <p>Для оптовых клиентов</p>
        </div>
        <div>
          <p>Вопрос ответ</p>
          <p>Дополнительный сервис</p>
          <p>Проверка на битые пиксели</p>
          <p>Утилизация техники</p>
          <p>Гарантийное обслуживание</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
