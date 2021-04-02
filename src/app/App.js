import './App.scss'
import logo from 'assets/logo.svg'
import Dialog from 'components/Dialog/Dialog'
import { GlobalColors } from 'styles/pages/theme.styled';

function App() {
  return (
    <>
      <GlobalColors />
      <Dialog visible={true} />
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
