"use client";
import { Button } from "@mui/material";
import s from "./GetMe.module.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../../hooks/useDispatch";
import { clearToken } from "../../store/authSlice";
import { useRouter } from "next/navigation";

interface IUser {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
}

const GetMe = () => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:1000/auth/getme", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  const logOut = () => {
    dispatch(clearToken());
    setUser({} as IUser);
    setTimeout(() => {
      window.location.reload();
    }, 100);
    router.push("/");
  };

  return (
    <div className={s.wrapper}>
      <div>
        <h1>Profile:</h1>
        <p>Username: {user.name}</p>
        <p>Phone {user.phoneNumber}</p>
        <p>Email {user.email}</p>
      </div>
      <Button
        className={s.button}
        variant="contained"
        style={{ background: "teal" }}
        onClick={logOut}
      >
        LogOut
      </Button>
    </div>
  );
};

export default GetMe;
