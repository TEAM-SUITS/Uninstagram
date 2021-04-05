import React, { useState } from 'react';
import styled from 'styled-components';
import AboutUs from 'components/AboutUs/AboutUs';
import HowToUse from 'components/HowToUse/HowToUse';
import MoreMain from 'components/MoreMain/MoreMain';

/* -------------------------------------------------------------------------- */

const StyledMorePageContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MorePage() {
  const [tab, setTab] = useState('MAIN');

  const onClickHowToUse = () => {
    setTab('HOW_TO_USE');
  };

  const onClickAboutUs = () => {
    setTab('ABOUT_US');
  };

  const handleTab = {
    AboutUs() {
      setTab('ABOUT_US');
    },
    HowToUse() {
      setTab('HOW_TO_USE');
    },
    BackToMain() {
      setTab('MAIN');
    },
  };

  let comp = null;

  switch (tab) {
    case 'HOW_TO_USE':
      comp = <HowToUse handler={handleTab} />;
      break;
    case 'ABOUT_US':
      comp = <AboutUs handler={handleTab} />;
      break;
    default:
      comp = <MoreMain handler={handleTab} />;
      break;
  }

  return (
    <>
      <StyledMorePageContainer>{comp}</StyledMorePageContainer>
    </>
  );
}
