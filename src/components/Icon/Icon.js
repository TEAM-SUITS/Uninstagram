import React from "react";
import { string, oneOf } from "prop-types";
import { ReactComponent as Search } from "./images/search.svg";
import { ReactComponent as SearchActive } from "./images/search-active.svg";
import { ReactComponent as Home } from "./images/home.svg";
import { ReactComponent as HomeActive } from "./images/home-active.svg";
import { ReactComponent as Post } from "./images/post.svg";
import { ReactComponent as PostActive } from "./images/post-active.svg";
import { ReactComponent as Profile } from "./images/profile.svg";
import { ReactComponent as ProfileActive } from "./images/profile-active.svg";
import { ReactComponent as Info } from "./images/info.svg";
import { ReactComponent as InfoActive } from "./images/info-active.svg";

/* -------------------------------------------------------------------------- */

const Icon = ({ type, title = type, height = "25px", style, ...restProps }) => {
  let COMP = null;
  switch (type) {
    case "search":
      COMP = Search;
      break;
    case "search-active":
      COMP = SearchActive;
      break;
    case "home":
      COMP = Home;
      break;
    case "home-active":
      COMP = HomeActive;
      break;
    case "post":
      COMP = Post;
      break;
    case "post-active":
      COMP = PostActive;
      break;
    case "profile":
      COMP = Profile;
      break;
    case "profile-active":
      COMP = ProfileActive;
      break;
    case "info":
      COMP = Info;
      break;
    case "info-active":
      COMP = InfoActive;
      break;
    default:
      throw new Error("아이콘을 찾을수없습니다");
  }

  return <COMP title={title} height={height} {...restProps} />;
};

Icon.propTypes = {
  type: oneOf([
    "search",
    "home",
    "post",
    "profile",
    "info",
    "profile-active",
    "info-active",
    "post-active",
    "home-active",
    "search-active",
  ]).isRequired,
};

export default Icon;
