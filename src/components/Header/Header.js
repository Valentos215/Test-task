import s from "./Header.module.scss";
import Button from "../Buttons/Button";
import logo from "../../Assets/Logo.svg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="container">
      <div className={s.header}>
        <div className={s.header__wrapper}>
          <div className={s.header__logo}>
            <img alt="" src={logo}></img>
          </div>
          <div className={s.header__buttons}>
            <Link to="users" smooth={true} duration={1000}>
              <Button text="Users" />
            </Link>
            <Link to="form" smooth={true} duration={1000}>
              <Button text="Sign Up" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
