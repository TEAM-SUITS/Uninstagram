import { createGlobalStyle } from 'styled-components';

/* 전역 변수 선언 (CSS 방식)--------------------------------------------------------- */

export const GlobalColors = createGlobalStyle`
  html {
    --color-lightgray: #fafafa;
    --color-gray: #ccc;
    --color-darkgray: #555;
    --color-black: #000;
    --color-background: #eee;
    --color-thistle: thistle;
  }
`;