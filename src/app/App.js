import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { GlobalColors } from 'styles/pages/theme.styled';
import Spinner from 'components/Spinner/Spinner.styled';
import SignInDialog from 'containers/SignInDialog';

import {
  HomePage,
  MorePage,
  PostPage,
  ProfilePage,
  SearchPage,
  PageNotFound,
} from 'pages/Pages';

/* -------------------------------------------------------------------------- */

// test
import { Postcard } from 'containers/Postcard';

/* -------------------------------------------------------------------------- */

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
    <div className="App">
      <GlobalColors />
      <Switch>
      {/* <SignInDialog visible={!loginStatus} /> */}
      {/* <Postcard content="착목한는 반짝이는 그들의 원질이 무엇을 관현악이며, 것이다. 반짝이는 보내는 이상의 거선의 싶이 생생하며, 꽃 품었기 있다. 품에 못하다 역사를 없으면 얼마나 뛰노는 어디 부패뿐이다. 때까지 같지 길지 찬미를 황금시대를 우는 불어 것이다. 소리다.이것은 속에 방황하였으며, 현저하게 가치를 자신과 생의 무엇이 약동하다. 피어나기 얼마나 못할 피가 가치를."></Postcard> */}
      <Route path="/" exact component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/post" component={PostPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/more" component={MorePage} />
      <Route path="/page-not-found" component={PageNotFound} />
      <Redirect to="/page-not-found" />
      </Switch>
    </div>
  )
}

export default App
