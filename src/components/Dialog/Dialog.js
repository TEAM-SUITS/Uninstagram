import React from 'react';
import Portal from 'components/Portal/Portal';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

// 디바이스 감지

/* 🍕 Styled Components-------------------------------------------------------------- */

const DialogContainer = styled.div.attrs(() => ({
  role: 'dialog',
  ariaModal: 'true',
  ariaLable: '일회용 계정 생성하기',
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
  visible = false, // 다이얼로그 가시성 여부
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

      // 다이얼로그 뒤에 영역이 모바일 보이스리더기에 읽히지 않도록 처리
      const rootNode = document.getElementById('root');
      rootNode.setAttribute('aria-hidden', true);
      rootNode.style.userSelect = 'none';

      const handleFocusTrap = e => {
        // 다이얼로그 노드
        // const dialogNode = dialogRef.current;
        // focusable nodes "inside" dialogNode
        const focusableNodeList = dialogNode.querySelectorAll(
          'a, button, input, select, textarea'
        ); // 참고로 a 태그는 href 속성이나 tabindex 속성이 있으면 focusable함.

        // 첫 번째 포커스 요소와 마지막 포커스 요소를 기억해놓아야
        // 다이얼로그가 닫히지 않는 한 다이얼로그 내에서 포커싱이 순환될 수 있음.
        const firstFocusNode = focusableNodeList[0];
        const lastFocusNode = focusableNodeList[focusableNodeList.length - 1];

        // 첫 번째 포커스 요소에서 shift + tab 동시에 누르면? -> 마지막 포커스 요소로 이동!
        if (e.target === firstFocusNode && e.shiftKey && e.key === 'Tab') {
          e.preventDefault();
          lastFocusNode.focus();
        }

        // 마지막 포커스 요소에서 tab 누르면? -> 첫 번째 포커스 요소로 이동!
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
