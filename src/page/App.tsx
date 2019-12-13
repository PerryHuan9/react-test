import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import logo from "../assets/logo.svg";
import "./App.scss";
import TestUseState from "./TestUseState";
import TestUseEffect from "./TestUseEffect";

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </header>
  );
};

const Home: React.FC = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const ROUTES = [
  { path: "/home", text: "首页", view: Home },
  { path: "/testUseState", text: "TestUseState", view: TestUseState },
  { path: "/testUseEffect", text: "TestUseEffect", view: TestUseEffect }
];
const AppRouter: React.FC = () => {
  return (
    <div className="App-router">
      <Router>
        <nav>
          <ul className="App-router-ul">
            {ROUTES.map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className="App-router-link"
                  activeClassName="App-router-link-active"
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          {ROUTES.map(item => (
            <Route key={item.path} path={item.path} exact={true}>
              {<item.view />}
            </Route>
          ))}
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
