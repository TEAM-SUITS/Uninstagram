import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/storage/currentUser/currentUser";
import SignInDialog from "containers/SignInDialog";
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
  const { userName } = useSelector((state) => selectCurrentUser(state));

  return (
    <div className="App">
      <GlobalColors />
      <HomeLogoLink />
      <Navigation />
      <SignInDialog visible={!userName} />

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
