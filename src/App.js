import React from "react";
import useToast from "./components/Toast/context/useToast";

const App = () => {
  const toast = useToast();

  const addToast = () => {
    toast.add({ message: "Success Notification", type: "Success" });
  };

  return (
    <div>
      <h1>Toast Notification</h1>
      <button onClick={() => addToast()}>Add Toast</button>
    </div>
  );
};

export default App;
