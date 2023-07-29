import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPage";
import "./style.css";
import AlertManager from "./components/Organisms/AlertManager/index";
import { Alert_Handler } from "./contexts/alert_handler";

ReactDOM.render(
  <Alert_Handler>
    <AlertManager />
    <MainPage />
  </Alert_Handler>,
  document.getElementById("app")
);
