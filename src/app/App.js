import React from 'react'
import './App.scss'
import logo from 'assets/logo.svg'
import { GlobalColors } from 'styles/pages/theme.styled';
import Spinner from 'components/Spinner/Spinner.styled';
import SignInDialog from 'containers/SignInDialog';

import Profile from 'components/PostcardProfile/PostcardProfile.styled';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loginStatus, setLoginStatus] = React.useState(false);

  // test spinner
  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <GlobalColors />
      {/* <SignInDialog visible={!loginStatus} /> */}
      <Profile
        imgUrl='http://turnyournameintoaface.com/face/01010101.png'
        userName='안예인짱짱맨'
      />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>src/App.js</code> 문서를 수정하면 실시간 업데이트 됩니다
          </p>
          <a
            className="App-link"
            href="https://ko.reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            React를 배워보세요
          </a>
        </header>
      </div>
    </>
  )
}

export default App
