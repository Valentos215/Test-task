import s from "./Header.module.css";
import Button from "../Buttons/Button";
import logo from "../../Assets/Logo.svg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="container">
      <div className={s.header}>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <img alt="" src={logo}></img>
          </div>
          <div className={s.buttons}>
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
