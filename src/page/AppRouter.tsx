import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import TestUseState from "./TestUseState";
import TestUseEffect from "./TestUseEffect";
import TestCustomHook from "./TestCustomHook";
import TestUseReducer from "./TestUserReducer";
import TestUseCallback from "./TestUseCallback";
import TestUseMemo from "./TestUseMemo";
import TestUseContext from "./TestUseContext";

const Home: React.FC = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const ROUTES = [
  { path: "/home", text: "首页", view: Home },
  { path: "/testUseState", text: "TestUseState", view: TestUseState },
  { path: "/testUseEffect", text: "TestUseEffect", view: TestUseEffect },
  { path: "/testCustomHook", text: "TestCustomHook", view: TestCustomHook },
  { path: "/testUseReducer", text: "TestUseReducer", view: TestUseReducer },
  { path: "/testUseCallback", text: "TestUseCallback", view: TestUseCallback },
  { path: "/testUseMemo", text: "TestUseMemo", view: TestUseMemo },
  { path: "/testUseContext", text: "TestUseContext", view: TestUseContext }
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

export default AppRouter;
