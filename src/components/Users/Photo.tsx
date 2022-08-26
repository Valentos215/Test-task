import React from "react";
import photoCover from "../../Assets/photo-cover.svg";

const Photo = ({ imgUrl }) => {
  return <img src={imgUrl ? imgUrl : photoCover} alt=""></img>;
};

export default Photo;
