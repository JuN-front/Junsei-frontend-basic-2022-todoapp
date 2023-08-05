import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPage";
import "./style.css";
import AlertManager from "./components/Organisms/AlertManager/index";
import { AlertHandlerProvider } from "./contexts/alert_handler";

ReactDOM.render(
  <AlertHandlerProvider>
    <AlertManager />
    <MainPage />
  </AlertHandlerProvider>,
  document.getElementById("app")
);
