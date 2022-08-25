import React from "react";
import Tooltip from "../sharedComponents/Tooltip";
import s from "./Card.module.scss";

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
        <img src={image} alt=""></img>
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
