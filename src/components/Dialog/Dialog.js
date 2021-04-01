import React from 'react';
import Portal from 'components/Portal/Portal';

import styles from './Dialog.module.scss';

/* -------------------------------------------------------------------------- */

export default function Dialog({
  visible = false, // 다이얼로그 가시성 여부
}) {
  const dialogRef = React.useRef(null);
  const [userName, setUserName] = React.useState('');

  // a11y
  React.useEffect(() => {
    if (visible) {
      const dialogNode = dialogRef.current;
      // dialogNode.setAttribute('tabIndex', 0);
      dialogNode.querySelector('input').focus();
      console.log('hi');
      // dialogNode.focus();

      // 다이얼로그 뒤에 영역이 모바일 보이스리더기에 읽히지 않도록 처리
      const rootNode = document.getElementById('root');
      rootNode.setAttribute('aria-hidden', true);

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

        console.log(focusableNodeList);
        // 첫 번째 포커스 요소에서 shift + tab 동시에 누르면? -> 마지막 포커스 요소로 이동!
        if (e.target === firstFocusNode && e.shiftKey && e.key === 'Tab') {
          e.preventDefault(); // ❔ default가 무엇인지??
          lastFocusNode.focus();
        }

        // 마지막 포커스 요소에서 tab 누르면? -> 첫 번째 포커스 요소로 이동!
        if (e.target === lastFocusNode && !e.shiftKey && e.key === 'Tab') {
          e.preventDefault(); // ❔ default가 무엇인지??
          firstFocusNode.focus();
        }
      };

      window.addEventListener('keydown', handleFocusTrap);

      // clean-up function
      return () => {
        // dialogNode.removeAttribute('tabIndex');
        rootNode.removeAttribute('aria-hidden');
        window.removeEventListener('keydown', handleFocusTrap);
      }
    }
  }, [visible]);

  return (
    <Portal id={'dialog-container'}>
      {visible && (
        <div
          className={`${styles['container']} focus`}
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="일회용 계정 생성하기"
        >
          <h1 className={styles['h']}>
            Start with your avatar!
          </h1>
          <img src="assets/mockimg.png" alt="임시 이미지"/>
          <input
            type="text"
            value={userName}
            onChange={e => {
              setUserName(e.target.value);
            }}
          />
          <button
            type="button"
            className={styles['button']}
          >
            DONE
          </button>
        </div>
      )}
      {visible ? <Dialog.Modal /> : null}
    </Portal>
  );
}

/* Compound Component----------------------------------------------------------- */

Dialog.Modal = function DialogModal() {
  return (
    <div
      className={styles['dim']}
    >
    </div>
  );
}