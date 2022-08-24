import s from "./Card.module.css";

const Card = ({ image, username, position, email, phone }) => {
  const wordLength = (word) => {
    if (word.length > 30) {
      return word.slice(0, 30) + "...";
    }
    return word;
  };

  return (
    <div className={s.wrapper}>
      <div className={s.avatar}>
        <img src={image} alt=""></img>
      </div>
      <div className={s.username}>{wordLength(username)}</div>
      <div className={s.contacts}>
        <p>{position}</p>
        <p>{wordLength(email)}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default Card;
