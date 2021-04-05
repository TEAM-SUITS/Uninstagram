import React from 'react';
import MenuContainer from '../MenuContainer/MenuContainer';
import PropTypes from 'prop-types';

import { ReactComponent as Suh } from '../../assets/TeamAvatars/Suh.svg';
import { ReactComponent as Ahn } from '../../assets/TeamAvatars/Ahn.svg';
import { ReactComponent as Park } from '../../assets/TeamAvatars/Park.svg';

const AboutUs = ({ handler }) => {
  return (
    <MenuContainer type="aboutus" heading="About Us" handler={handler}>
      Lorem ipsum dolor sit amet.sq
      <Ahn />
      <Suh />
      <Park />
    </MenuContainer>
  );
};

AboutUs.propTypes = {
  handler: PropTypes.object.isRequired,
};

export default AboutUs;
