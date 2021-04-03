import styled from 'styled-components';

export const StyledPostcard = styled.div`
  background-color: var(--color-lightgray);
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, .25);
  
  @media screen and (min-width: 480px) {
    .contents {
      position: relative;
    }

    .bubble {
      background-color: var(--color-background);
      min-height: 80px;
      max-height: 100px;
      border-radius: 20px;
      overflow-y: auto;

      p {
        padding: 0 .7em;
      }
    }

    .tail {
      position: absolute;
      top: -48px;
      left: 25%;
      background-color: var(--color-background);
      width: 50px;
      height: 50px;
      clip-path: polygon(46% 14%, 49% 18%, 47% 52%, 45% 85%, 45% 100%, 32% 100%, 6% 100%, 28% 51%, 43% 18%);
      /* clip-path: polygon(69% 32%, 0% 100%, 40% 100%); */
    }
  }

  @media screen and (max-width: 480px) {
    width: 305px;
  }
​
  p {
    line-height: 120%;
    font-size: 1em;
  }
`;
