import { useState } from "react";

export default function useInput(initialValue = "") {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: (e) => setInputValue(e.target.value),
    clearInput: () => setInputValue(""),
    keyInput: (e, cb) => {
      if (e.which === 13 || e.keyCode === 13) {
        cb(inputValue);
        return true;
      }
      return false;
    },
  };
}
