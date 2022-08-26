import React from "react";
import Tooltip from "../sharedComponents/Tooltip";
import s from "./Card.module.scss";
import photoCover from "../../Assets/photo-cover.svg";

const Photo = React.lazy(() => import("./Photo"));

type CardProps = {
  image: string;
  username: string;
  position: string;
  email: string;
  phone: string;
};

const Card: React.FC<CardProps> = ({
  image,
  username,
  position,
  email,
  phone,
}) => {
  const wordLength = (word: string): string => {
    if (word.length > 30) {
      return word.slice(0, 30) + "...";
    }
    return word;
  };

  return (
    <div className={s.card}>
      <div className={s.card__photo}>
        <React.Suspense fallback={<img src={photoCover} alt="" />}>
          <Photo imgUrl={image} />
        </React.Suspense>
      </div>
      <Tooltip content={username}>
        <div className={s.card__username}>{wordLength(username)}</div>
      </Tooltip>
      <ul>
        <Tooltip content={position}>
          <li>{position}</li>
        </Tooltip>
        <Tooltip content={email}>
          <li>{wordLength(email)}</li>
        </Tooltip>
        <Tooltip content={phone}>
          <li>{phone}</li>
        </Tooltip>
      </ul>
    </div>
  );
};

export default Card;
