import React from "react";
import { string, oneOf } from "prop-types";
import search from "assets/NavIcon/Search.svg";
import home from "assets/NavIcon/Home.svg";
import post from "assets/NavIcon/Post.svg";
import profile from "assets/NavIcon/Profile.svg";
import more from "assets/NavIcon/More.svg";

/* -------------------------------------------------------------------------- */

const Icon = ({ type, alt = "", height, style, ...restProps }) => {
  let src = "";
  const customStyle = { height, ...style };
  switch (type) {
    case "search":
      src = search;
      break;
    case "home":
      src = home;
      break;
    case "post":
      src = post;
      break;
    case "profile":
      src = profile;
      break;
    case "more":
      src = more;
      break;
    default:
      throw new Error("아이콘을 찾을수없습니다");
  }

  return <img src={src} alt={alt} style={customStyle} {...restProps} />;
};

Icon.propTypes = {
  type: oneOf(["search", "home", "post", "profile", "more"]).isRequired,
  alt: string,
};

export default Icon;
