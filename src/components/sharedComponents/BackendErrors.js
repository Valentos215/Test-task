import s from "./BackendErrors.module.css";

const BackendErrors = ({ backendErrors }) => {
  if (backendErrors) {
    const errorMessages = Object.keys(backendErrors).map((name) => {
      return `${name}: ${backendErrors[name].join(" ")}`;
    });
    return (
      <ul className={s.wrapper}>
        {errorMessages.map((errMessage) => (
          <li key={errMessage}>{errMessage}</li>
        ))}
      </ul>
    );
  } else
    return (
      <ul className={s.wrapper}>
        <li>Some backend error happened</li>
      </ul>
    );
};

export default BackendErrors;
