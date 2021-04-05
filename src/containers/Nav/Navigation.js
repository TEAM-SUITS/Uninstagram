import React from "react";
import { Navbar } from "./Navigation.styled";
import Icon from "components/Icon/Icon";
import useDetectViewport from "hooks/useDetectViewport";
import { useLocation } from "react-router";

const Navigation = () => {
  const location = useLocation();
  const { pathname } = location;
  const { isMobile } = useDetectViewport();
  return (
    <Navbar center={isMobile}>
      <Navbar.Logo>Uninstagram</Navbar.Logo>
      <Navbar.Items ismobile={isMobile}>
        <Navbar.ItemLink exact to="/">
          <Icon type={pathname === "/" ? "home-active" : "home"} />
        </Navbar.ItemLink>
        <Navbar.ItemLink to="/search">
          <Icon type={pathname === "/search" ? "search-active" : "search"} />
        </Navbar.ItemLink>
        <Navbar.ItemLink to="/post">
          <Icon type={pathname === "/post" ? "post-active" : "post"} />
        </Navbar.ItemLink>
        <Navbar.ItemLink to="/profile">
          <Icon type={pathname === "/profile" ? "profile-active" : "profile"} />
        </Navbar.ItemLink>
        <Navbar.ItemLink to="/info">
          <Icon type={pathname === "/info" ? "info-active" : "info"} />
        </Navbar.ItemLink>
      </Navbar.Items>
    </Navbar>
  );
};

export default Navigation;
