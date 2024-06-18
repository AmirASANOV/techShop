import React, { FC } from "react";
import s from "./CardItem.module.scss";
import { Button } from "@mui/material";
import { useAppDispatch } from "@/hooks/useDispatch";
import { addBasket } from "@/store/basketSlice";

interface IProps {
  data: ICardItem;
}

type ICardItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

const CardItem: FC<IProps> = (props) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {
      id: props.data.id,
      imageUrl: props.data.imageUrl,
      title: props.data.name,
      price: props.data.price,
    };
    dispatch(addBasket(data));
    setIsClicked(true);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <picture>
          <img
            className={s.img}
            src={`${props.data.imageUrl}.webp`}
            alt="logo"
          />
        </picture>
      </div>
      <h3 className={s.text}>{props.data.name}</h3>

      <div className={s.buy}>
        <p className={s.text}>{props.data.price} руб</p>
        {!isClicked ? (
          <Button
            className={s.button}
            variant="contained"
            style={{ background: "teal" }}
            onClick={(e) => handleClick(e)}
          >
            buy
          </Button>
        ) : (
          <p>Clicked</p>
        )}
      </div>
    </div>
  );
};

export default CardItem;
