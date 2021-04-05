import styled from 'styled-components';
import { motion } from 'framer-motion';

/* -------------------------------------------------------------------------- */

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  cursor: pointer;
  background-color: var(--color-darkgray);
  color: var(--color-lightgray);
  cursor: pointer;
  display: block;
  margin: 1em auto;
  padding: 0.3em 1.5em;
  font-weight: 700;
  line-height: 1.5;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 40px 5px var(--color-gray);
`;

const hoverMotion = {
  y: '-2px',
  transition: { duration: 0.4, type: 'tween' },
  backgroundColor: 'var(--color-black)',
};

const StyledButton = motion(Button);

export function MotionButton({ onClick, children }) {
  return (
    <StyledButton
      onClick={onClick}
      whileFocus={hoverMotion}
      whileHover={hoverMotion}
    >{children}</StyledButton>
  );
}
