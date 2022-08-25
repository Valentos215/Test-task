import s from "./Card.module.scss";

const Card = ({ image, username, position, email, phone }) => {
  const wordLength = (word) => {
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
      <div className={s.card__contacts}>
        <p>{position}</p>
        <p>{wordLength(email)}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default Card;
