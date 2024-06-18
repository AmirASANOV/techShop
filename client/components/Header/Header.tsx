"use client";
import { AppBar, Toolbar } from "@mui/material";
import Link from "next/link";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useAppSelector } from "@/hooks/useSelector";
import s from "./Header.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [token]);
  return (
    <div className={s.wrapper}>
      {/* <AppBar position="static" sx={{ background: "teal" }}>
        <Toolbar className={s.header}>
          <Link href="/getMe">
            <AccountBoxIcon style={{ color: "#fff" }} />
          </Link>

          <div className="links">
            <Link className={s.link} href="/">
              Home
            </Link>
            {!isVisible && (
              <Link className={s.link} href="/login">
                Login
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar> */}
      <div className={s.description}>
        <p>Москва</p>
        <p>Отзывы</p>
        <p>О нас</p>
        <p>Доставка</p>
        <p>Оплата</p>

        <p>Наши гарантии</p>
        <p>Почему мы?</p>
        <p>Контакты</p>
        <Link href="/getMe">Личный кабинет</Link>
      </div>

      <div className={s.header}>
        <Link href="/">
          <img src="/images/logoHeader.svg" alt="" />
        </Link>
        <div className={s.categories}>
          <p className={s.link}>Техника</p>
          <p className={s.link}>Мебель</p>
          <p className={s.link}>Инструменты</p>
        </div>
        <input type="text" />
        <div className={s.contacts}>
          <div className={s.images}>
            <img src="/images/contacts/telegram.svg" alt="" />
          </div>
          <div className={s.description}>
            <p className={s.phoneNumber}>+79269913644</p>
            <p className={s.time}>9:00 - 22:00 без выходных</p>
          </div>
        </div>
        <Link href="/basket">
          <img src="/images/contacts/shop.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
