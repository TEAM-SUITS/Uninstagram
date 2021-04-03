import { createGlobalStyle } from 'styled-components';

/* 전역 스타일--------------------------------------------------------- */

export const GlobalColors = createGlobalStyle`
  html {
    /* 색상 변수 */
    --color-lightgray: #fafafa;
    --color-gray: #ccc;
    --color-darkgray: #555;
    --color-black: #000;
    --color-background: #eee;
  }
`;