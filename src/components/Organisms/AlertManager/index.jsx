import { useAlertHandlerContext } from "../../../contexts/alert_handler";

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
  console.log(AlertHandlerContext.visible);
  return (
    <Alert
      SText={AlertHandlerContext.message}
      visible={AlertHandlerContext.visible}
    />
  );
};

export default AlertManager;
