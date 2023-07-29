import { useAlertHandlerContext } from "../../../contexts/alert_handler";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  if (AlertHandlerContext.visible === true) {
    setTimeout(AlertHandlerContext.closeAlert, 5000);
  }

  //AlertHandlerContextから直接値が取り出せる
  console.log(AlertHandlerContext.visible);
  AlertHandlerContext.setAlert("message"); //Alertの表示
};

export default AlertManager;
