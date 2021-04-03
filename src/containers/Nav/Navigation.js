import React from "react";
import { Navbar, MobileNavbar } from "./Navigation.styled";
import Icon from "components/Icon/Icon";
import useDetectViewport from "hooks/useDetectViewport";
// import { navlist } from "./Navigation.module.scss";

const Navigation = () => {
  const { isMobile, isDesktop } = useDetectViewport();
  return (
    <Navbar center={isMobile}>
      <Navbar.Logo>Uninstagram</Navbar.Logo>
      {isDesktop ? (
        <Navbar.Items>
          <Navbar.ItemLink exact to="/">
            <Icon type="home" />
          </Navbar.ItemLink>
          <Navbar.ItemLink to="/search">
            <Icon type="search" />
          </Navbar.ItemLink>
          <Navbar.ItemLink to="/post">
            <Icon type="post" />
          </Navbar.ItemLink>
          <Navbar.ItemLink to="/profile">
            <Icon type="profile" />
          </Navbar.ItemLink>
          <Navbar.ItemLink to="/more">
            <Icon type="more" />
          </Navbar.ItemLink>
        </Navbar.Items>
      ) : (
        <MobileNavbar.Items>
          <MobileNavbar.ItemLink exact to="/">
            <Icon type="home" />
          </MobileNavbar.ItemLink>
          <MobileNavbar.ItemLink to="/search">
            <Icon type="search" />
          </MobileNavbar.ItemLink>
          <MobileNavbar.ItemLink to="/post">
            <Icon type="post" />
          </MobileNavbar.ItemLink>
          <MobileNavbar.ItemLink to="/profile">
            <Icon type="profile" />
          </MobileNavbar.ItemLink>
          <MobileNavbar.ItemLink to="/more">
            <Icon type="more" />
          </MobileNavbar.ItemLink>
        </MobileNavbar.Items>
      )}
    </Navbar>
  );
};

export default Navigation;