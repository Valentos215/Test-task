import React from "react";
import s from "./Header.module.scss";
import Button from "../Buttons/Button";
import logo from "../../Assets/Logo.svg";
import { Link } from "react-scroll";
import useLocalStorage from "../../hooks/useLocalStorage";

const Header = () => {
  const [, setAuth] = useLocalStorage("auth");

  return (
    <div className="container">
      <div className={s.header}>
        <div className={s.header__wrapper}>
          <div className={s.header__logo} onClick={() => setAuth("")}>
            <img alt="" src={logo}></img>
          </div>
          <div className={s.header__buttons}>
            <Link to="users" smooth={true} duration={1000} offset={-50}>
              <Button text="Users" />
            </Link>
            <Link to="form" smooth={true} duration={1000} offset={-50}>
              <Button text="Sign Up" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
