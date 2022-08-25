import React from "react";
import s from "./Description.module.scss";
import Button from "../Buttons/Button";
import { Link } from "react-scroll";

const Description = () => {
  return (
    <div className={s.banner}>
      <div className={s.banner__background}>
        <div className={s.description}>
          <h1 className={s.description__title}>
            Test assignment for front-end developer
          </h1>
          <div className={s.description__text}>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </div>
          <Link to="form" smooth={true} duration={1000}>
            <Button text="Sign Up" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Description;
