import React from 'react';
import styled from 'styled-components';
import MenuContainer from '../MenuContainer/MenuContainer';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  a {
    text-decoration: none;
    color: inherit;
  }

  figure {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 0 10px;
    img {
      width: 70px;
      margin-bottom: 4px;
    }
  }

  @media screen and (min-width: 480px) {
    height: 300px;

    figure {
      margin: 0 20px;
      img {
        width: 120px;
        margin-bottom: 8px;
      }
      figcaption {
        font-size: 24px;
      }
    }
  }
`;

const AboutUs = ({ handler }) => {
  return (
    <MenuContainer type="aboutus" heading="About Us" handler={handler}>
      <Container>
        <a href="https://github.com/minki607">
          <figure>
            <img src="assets/TeamAvatars/Suh.png" alt="서민기 아바타" />
            <figcaption>서민기</figcaption>
          </figure>
        </a>

        <a href="https://github.com/fe-kid">
          <figure>
            <img src="assets/TeamAvatars/Park.png" alt="박재운 아바타" />
            <figcaption>박재운</figcaption>
          </figure>
        </a>

        <a href="https://github.com/ahnanne">
          <figure>
            <img src="assets/TeamAvatars/Ahn.png" alt="안예인 아바타" />
            <figcaption>안예인</figcaption>
          </figure>
        </a>
      </Container>
    </MenuContainer>
  );
};

AboutUs.propTypes = {
  handler: PropTypes.object.isRequired,
};

export default AboutUs;
