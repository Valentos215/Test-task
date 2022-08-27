import React from "react";
import photoCover from "../../Assets/photo-cover.svg";

const Photo = ({ imgUrl }) => {
  const imgChecker = (url: string) => {
    if (!url || url.search("placeholder") !== -1) {
      return photoCover;
    } else {
      return url;
    }
  };

  return <img src={imgChecker(imgUrl)} alt=""></img>;
};

export default Photo;
