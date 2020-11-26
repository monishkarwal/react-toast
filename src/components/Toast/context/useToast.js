// eslint-disable-next-line
import React, { useContext } from "react";
import { ToastContext } from "./ToastContext";

const useToast = () => {
  const context = useContext(ToastContext);

  return { add: context.add };
};

export default useToast;
