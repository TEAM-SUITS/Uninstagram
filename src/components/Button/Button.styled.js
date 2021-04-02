import React from 'react';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  background-color: var(--color-darkgray);
  color: var(--color-lightgray);
  cursor: pointer;
  display: block;
  margin: 1em auto;
  width: 100px;
  font-weight: 700;
  line-height: 1.5;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 40px 5px var(--color-gray);
`;