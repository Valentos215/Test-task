import React from "react";
import s from "./Successfull.module.scss";
import successImage from "../../Assets/success-image.svg";

const Successfull = () => {
  return (
    <div className={s.wrapper} id="form">
      <h1>User successfully registered</h1>
      <div>
        <img src={successImage} alt=""></img>
      </div>
      <div className={s.space}></div>
    </div>
  );
};

export default Successfull;
