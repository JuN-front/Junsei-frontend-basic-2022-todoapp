import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert/index";
import React, { useEffect } from "react";
const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  useEffect(() => {
    if (AlertHandlerContext.visible === true) {
      setTimeout(() => {
        AlertHandlerContext.closeAlert();
      }, 5000);
    }
  }, [AlertHandlerContext]);

  // //AlertHandlerContextから直接値が取り出せる
  return (
    <Alert
      errorText={AlertHandlerContext.errorText}
      visible={AlertHandlerContext.visible}
    />
  );
};

export default AlertManager;
