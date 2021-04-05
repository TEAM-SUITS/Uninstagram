import HomeLogoLink from "containers/Header/HomeLogoLink";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { resetBoxModel } from "styles/common/common.styled";

const Link = ({ children, to, ...restProps }) => {
  return (
    <li>
      <NavLink to={to} {...restProps}>
        {children}
      </NavLink>
    </li>
  );
};

export const Navbar = styled.nav`
  z-index: 990;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  font-size: 1em;
  flex: 1;
  align-self: flex-start;
  padding: 0.5rem 2rem;
  height: 80px;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid var(--color-gray);
`;

export const MobileNavbar = styled(Navbar)``;

Navbar.Logo = styled(HomeLogoLink)``;

Navbar.Items = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  ${({ ismobile }) =>
    ismobile &&
    css`
      position: fixed;
      bottom: 0;
      width: 100vw;
      flex: 1;
      padding: 25px 15px;
      justify-content: space-around;
      height: 45px;
      border-top: 1px solid var(--color-gray);
      margin: 0;
      background-color: #fff;
    `}
`;

Navbar.ItemLink = styled(Link)`
  ${resetBoxModel}
  padding: 10px 15px;
`;

MobileNavbar.Items = styled(Navbar.Items)`
  z-index: 990;
  position: fixed;
  bottom: 0;
  width: 100vw;
  flex: 1;
  padding: 25px 15px;
  justify-content: space-around;
  height: 45px;
  border-top: 1px solid #ccc; //replace with gray 2
  margin: 0;
`;

MobileNavbar.ItemLink = styled(Navbar.ItemLink)``;
