import React from "react";
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
      <div className={s.card__username}>{wordLength(username)}</div>
      <div>
        <p>{position}</p>
        <p>{wordLength(email)}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default Card;
