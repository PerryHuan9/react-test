import React from "react";
import logo from "../assets/logo.svg";
import "./App.scss";
import AppRouter from "./AppRouter";
import { ThemeContext } from "../utils/context";

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
    <ThemeContext.Provider value={{ color: "red", backgroundColor: "blue" }}>
      <div className="App">
        <Header />
        <AppRouter />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
