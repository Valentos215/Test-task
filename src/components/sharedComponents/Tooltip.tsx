import React from "react";
import { useState } from "react";
import s from "./Tooltip.module.scss";

const Tooltip = ({ children, content }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span className={s.wrapper}>
      <span
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className={s.targetElement}
      >
        {children}
      </span>
      <span className={visible ? s.tooltip : s.hidden}>{content}</span>
    </span>
  );
};

export default Tooltip;
