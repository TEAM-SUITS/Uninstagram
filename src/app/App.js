import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeLogoLink from "containers/Header/HomeLogoLink";
import Navigation from "containers/Nav/Navigation";
import { GlobalColors } from "styles/pages/theme.styled";

import {
  HomePage,
  InfoPage,
  PostPage,
  ProfilePage,
  SearchPage,
  PageNotFound,
} from "pages/Pages";

/* -------------------------------------------------------------------------- */

function App() {
  const [loginStatus, setLoginStatus] = React.useState(false);

  return (
    <div className="App">
      <GlobalColors />
      <HomeLogoLink />
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/post" component={PostPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/info" component={InfoPage} />
        <Route path="/page-not-found" component={PageNotFound} />
        <Redirect to="/page-not-found" />
      </Switch>
    </div>
  );
}

export default App;
