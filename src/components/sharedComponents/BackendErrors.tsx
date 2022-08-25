import React from "react";
import s from "./BackendErrors.module.scss";

type BackendErrorsProps = {
  backendErrors: { fails: { name: string[] }[]; message: string };
};

const BackendErrors: React.FC<BackendErrorsProps> = ({ backendErrors }) => {
  if (backendErrors.fails) {
    const errorMessages = Object.keys(backendErrors.fails).map((name) => {
      return `${name}: ${backendErrors.fails[name].join(" ")}`;
    });
    return (
      <ul className={s.wrapper}>
        {errorMessages.map((errMessage) => (
          <li key={errMessage}>{errMessage}</li>
        ))}
      </ul>
    );
  }

  if (backendErrors.message) {
    return (
      <ul className={s.wrapper}>
        <li>{backendErrors.message}</li>
      </ul>
    );
  }
  return (
    <ul className={s.wrapper}>
      <li>Some server error happened</li>
    </ul>
  );
};

export default BackendErrors;
