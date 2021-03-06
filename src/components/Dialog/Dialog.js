import React from 'react';
import Portal from 'components/Portal/Portal';
import styled from 'styled-components';

/* ๐ Styled Components-------------------------------------------------------------- */

const DialogContainer = styled.div.attrs(() => ({
  role: 'dialog',
  ariaModal: 'true',
  ariaLable: '์ผํ์ฉ ๊ณ์  ์์ฑํ๊ธฐ',
}))`
  z-index: 999;
  background-color: var(--color-lightgray);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 305px;
  border-radius: 10px;
  text-align: center;
`;

const Header = styled.h1`
  display: inline-block;
  margin: 1em 0;
  padding: 0;
  font-size: 1em;
`;

const Modal = styled.div.attrs(() => ({
  className: 'dim',
  role: 'presentation',
}))`
  z-index: 998;
  background-color: var(--color-black);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: .8;
  /* backdrop-filter: blur(20px) opacity(80%); */
`;

/* -------------------------------------------------------------------------- */

export default function Dialog({
  visible = false, // ๋ค์ด์ผ๋ก๊ทธ ๊ฐ์์ฑ ์ฌ๋ถ
  infoText = '', // content of h1
  children,
}) {
  const dialogRef = React.useRef(null);

  // a11y
  React.useEffect(() => {
    if (visible) {
      const dialogNode = dialogRef.current;
      dialogNode.setAttribute('tabIndex', -1);
      dialogNode.focus();

      // ๋ค์ด์ผ๋ก๊ทธ ๋ค์ ์์ญ์ด ๋ชจ๋ฐ์ผ ๋ณด์ด์ค๋ฆฌ๋๊ธฐ์ ์ฝํ์ง ์๋๋ก ์ฒ๋ฆฌ
      const rootNode = document.getElementById('root');
      rootNode.setAttribute('aria-hidden', true);
      rootNode.style.userSelect = 'none';

      const handleFocusTrap = e => {
        // ๋ค์ด์ผ๋ก๊ทธ ๋ธ๋
        // const dialogNode = dialogRef.current;
        // focusable nodes "inside" dialogNode
        const focusableNodeList = dialogNode.querySelectorAll(
          'a, button, input, select, textarea'
        ); // ์ฐธ๊ณ ๋ก a ํ๊ทธ๋ href ์์ฑ์ด๋ tabindex ์์ฑ์ด ์์ผ๋ฉด focusableํจ.

        // ์ฒซ ๋ฒ์งธ ํฌ์ปค์ค ์์์ ๋ง์ง๋ง ํฌ์ปค์ค ์์๋ฅผ ๊ธฐ์ตํด๋์์ผ
        // ๋ค์ด์ผ๋ก๊ทธ๊ฐ ๋ซํ์ง ์๋ ํ ๋ค์ด์ผ๋ก๊ทธ ๋ด์์ ํฌ์ปค์ฑ์ด ์ํ๋  ์ ์์.
        const firstFocusNode = focusableNodeList[0];
        const lastFocusNode = focusableNodeList[focusableNodeList.length - 1];

        // ์ฒซ ๋ฒ์งธ ํฌ์ปค์ค ์์์์ shift + tab ๋์์ ๋๋ฅด๋ฉด? -> ๋ง์ง๋ง ํฌ์ปค์ค ์์๋ก ์ด๋!
        if (e.target === firstFocusNode && e.shiftKey && e.key === 'Tab') {
          e.preventDefault();
          lastFocusNode.focus();
        }

        // ๋ง์ง๋ง ํฌ์ปค์ค ์์์์ tab ๋๋ฅด๋ฉด? -> ์ฒซ ๋ฒ์งธ ํฌ์ปค์ค ์์๋ก ์ด๋!
        if (e.target === lastFocusNode && !e.shiftKey && e.key === 'Tab') {
          e.preventDefault();
          firstFocusNode.focus();
        }
      };

      window.addEventListener('keydown', handleFocusTrap);

      // clean-up function
      return () => {
        dialogNode.removeAttribute('tabIndex');
        rootNode.removeAttribute('aria-hidden');
        window.removeEventListener('keydown', handleFocusTrap);
        rootNode.style.userSelect = 'auto';
      }
    }
  }, [visible]);

  return (
    <Portal id={'dialog-container'}>
      {visible ? <Modal /> : null}
      {visible && (
        <DialogContainer ref={dialogRef}>
          <Header>{infoText}</Header>
          {children}
        </DialogContainer>
      )}
    </Portal>
  );
}
