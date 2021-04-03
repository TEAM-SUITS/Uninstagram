import { Link } from "react-router-dom";
import { LogoText } from "./HomeLogoLink.styled";
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

const LogoHeader = styled.h1.attrs(() => ({
  lang: 'en',
}))``;

const HomeLogoLink = ({ children }) => {
  return (
    <LogoHeader>
      <Link
        to={{
          pathname: "/",
        }}
      >
        <LogoText>{children}</LogoText>
      </Link>
    </LogoHeader>
  );
};

export default HomeLogoLink;