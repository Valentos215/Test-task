import s from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.preloader}></div>
    </div>
  );
};

export default Preloader;
