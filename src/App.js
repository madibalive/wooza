import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Parse } from "parse";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./component/home/home";
import FooterPage from "./component/footer";
import LandingPage from "./component/landing/landingpage";
import AuthPage from "./component/auth/auth";
import TvShowPage from "./component/tv/tv";
import VideosPage from "./component/videos/videos";
import HeaderPage from "./component/header";
import MoviesPage from "./component/movies/movies";
import Whoops404 from "./component/whoop404";
import MediaPlayerPage from "./component/player/play";
import InfoTvPage from "./component/info/info_tv";
import InfoMoviePage from "./component/info/info_movie";
import SearchPage from "./component/search/search";
import AccountPag from "./component/account/account";
import MusicPage from "./component/music/music";
import ViewChannelPage from "./component/channel/channel";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="apppage">
          <div className="content-area">
            <HeaderPage />
            <div>
              <Switch>
                <Route exact path="/play" component={LandingPage} />
                <Route path="/auth" component={AuthPage} />
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute path="/search" component={SearchPage} />
                <PrivateRoute path="/account" component={AccountPag} />
                <Route
                  path="/movies"
                  component={({ match, location }) => (
                    <Switch>
                      <Route
                        exact
                        path={`${match.path}`}
                        component={MoviesPage}
                      />
                      <Route
                        path={`${match.path}/:id`}
                        component={InfoMoviePage}
                      />
                      <Route component={Whoops404} />
                    </Switch>
                  )}
                />
                <PrivateRoute
                  path="/tv"
                  component={({ match, location }) => (
                    <Switch>
                      <Route
                        exact
                        path={`${match.path}`}
                        component={TvShowPage}
                      />
                      <Route
                        path={`${match.path}/:id`}
                        component={InfoTvPage}
                      />
                      <Route component={Whoops404} />
                    </Switch>
                  )}
                />
                <Route path="/music" component={MusicPage} />
                <PrivateRoute
                  
                  path="/channel/:id"
                  component={ViewChannelPage}
                />
                <PrivateRoute path="/play/:id" component={MediaPlayerPage} />

                <Route component={Whoops404} />
              </Switch>
            </div>
          </div>
          <FooterPage />
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Parse.User.current() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/play",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default App;
