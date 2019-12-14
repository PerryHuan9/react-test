import React from "react";
import logo from "../assets/logo.svg";
import "./App.scss";
import AppRouter from "./AppRouter";

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

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
