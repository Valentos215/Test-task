import React from "react";
import classNames from "classnames";
import s from "./Button.module.scss";

type ButtonProps = {
  text: string;
  wide?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  wide = false,
  disabled = false,
  onClick,
}) => {
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
