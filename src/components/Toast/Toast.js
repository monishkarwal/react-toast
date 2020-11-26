import React, { useEffect } from "react";
import "./styles/toast.css";

const Toast = ({ message, type, remove }) => {
  useEffect(() => {
    const timeOut = setTimeout(remove, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <div className="toast">
      <p>{message}</p>
      <p>{type}</p>
      <button className="toast-close-btn" onClick={remove}>
        x
      </button>
    </div>
  );
};

export default Toast;
