import React, { useState } from "react";

function useInput(defaulvalue) {
  const [enteredValue, setEnteredValue] = useState(defaulvalue);

  const [didEdit, setDidEdit] = useState(false);

  function handleInputChange(event) {
    console.log("121", event.target.value);
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }
      console.log("123", enteredValue); 

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
  };
}

export default useInput;
