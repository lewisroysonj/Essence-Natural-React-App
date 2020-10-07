/** @format */

import React from "react";
import "./App.css";
import Header from "../Header/header";
import Main from "../Main/Main";
import { useSelector } from "react-redux";

export default function App() {
  const burgerNavToggle = useSelector((state) => state.burgerToggle);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
