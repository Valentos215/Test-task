import s from "./Successfull.module.scss";
import successImage from "../../Assets/success-image.svg";

const Successfull = ({ text, wide = false, disabled = false }) => {
  return (
    <div className={s.wrapper}>
      <h1>User successfully registered</h1>
      <div className={s.image}>
        <img src={successImage} alt=""></img>
      </div>
    </div>
  );
};

export default Successfull;
