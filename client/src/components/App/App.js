import React, { memo } from "react";

import Header from "../Header/Header";
import AddItem from "../AddItem/AddItem";
import GroceryList from "../GroceryList/GroceryList";

import useInput from "../../hooks/useInput";
import useList from "../../hooks/useList";

const App = memo(() => {
  const { inputValue, changeInput, clearInput, keyInput } = useInput();
  const { items, addItem, onItemRemove, onItemCheck } = useList();

  const clearInputAndAddItem = () => {
    clearInput();
    addItem(inputValue);
  };

  return (
    <Header>
      <AddItem
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddItem}
        onInputKeyPress={(e) => keyInput(e, clearInputAndAddItem)}
      />
      <GroceryList
        items={items}
        onItemCheck={(idx) => onItemCheck(idx)}
        onItemRemove={(idx) => onItemRemove(idx)}
      />
    </Header>
  );
});

export default App;
