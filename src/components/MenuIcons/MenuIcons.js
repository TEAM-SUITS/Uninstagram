import React from 'react';
import StyledMenuIcons from './MenuIcons.styled';
import PropTypes from 'prop-types';
import { ReactComponent as HowToUseActive } from '../../assets/MenuIcon/HowToUseActive.svg';
import { ReactComponent as HowToUse } from '../../assets/MenuIcon/HowToUse.svg';
import { ReactComponent as Github } from '../../assets/MenuIcon/Github.svg';
import { ReactComponent as TeamActive } from '../../assets/MenuIcon/TeamActive.svg';
import { ReactComponent as Team } from '../../assets/MenuIcon/Team.svg';

const MenuIcons = ({ type, handler }) => {
  switch (type) {
    case 'howtouse':
      return (
        <StyledMenuIcons>
          <button onClick={handler.BackToMain}>
            <HowToUseActive />
          </button>
          <a href="https://github.com/TEAM-SUITS/Uninstagram">
            <Github />
          </a>
          <button onClick={handler.AboutUs}>
            <Team />
          </button>
        </StyledMenuIcons>
      );
    case 'aboutus':
      return (
        <StyledMenuIcons>
          <button onClick={handler.HowToUse}>
            <HowToUse />
          </button>
          <a href="https://github.com/TEAM-SUITS/Uninstagram">
            <Github />
          </a>
          <button onClick={handler.BackToMain}>
            <TeamActive />
          </button>
        </StyledMenuIcons>
      );

    default:
      return (
        <StyledMenuIcons>
          <button onClick={handler.HowToUse}>
            <HowToUse />
          </button>
          <a href="https://github.com/TEAM-SUITS/Uninstagram">
            <Github />
          </a>
          <button onClick={handler.AboutUs}>
            <Team />
          </button>
        </StyledMenuIcons>
      );
  }
};

MenuIcons.propTypes = {
  handler: PropTypes.object.isRequired,
  type: PropTypes.string,
};

export default MenuIcons;
