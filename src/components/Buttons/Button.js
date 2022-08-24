import classNames from "classnames";
import s from "./Button.module.css";

const Button = ({ text, wide = false, disabled = false, onClick }) => {
  const buttonClasses = classNames({
    [s.btn]: true,
    [s.wide]: wide,
    [s.disabled]: disabled,
  });

  return (
    <div onClick={onClick} className={buttonClasses}>
      <span>{text}</span>
    </div>
  );
};

export default Button;
