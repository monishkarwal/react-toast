import React, { createContext, useState } from "react";
import { createPortal } from "react-dom";
import Toast from "../Toast";

const ToastContext = createContext();

const { Provider } = ToastContext;

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const add = ({ message, type }) => {
    const id = Math.random().toString(36).substr(2, 5);
    setToasts([...toasts, { message, type, id }]);
  };

  const remove = (id) => {
    console.log(id);
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const renderToast = (
    <div className="toast-wrapper">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          remove={() => remove(toast.id)}
        />
      ))}
    </div>
  );

  return (
    <Provider value={{ add }}>
      {children}
      {createPortal(renderToast, document.body)}
    </Provider>
  );
};

export { ToastContext, ToastProvider };
