import React, { useEffect, useState, useRef } from "react";
import { useQuery } from 'react-query'
import axios from 'axios'

import Header from "../Header/Header";
import AddItem from "../AddItem/AddItem";
import GroceryList from "../GroceryList/GroceryList";

import useInput from "../../hooks/useInput";
import useList from "../../hooks/useList";

const fetchList = () => axios('/api/list')

const App = () => {
  const items = useRef([]);

  const { inputValue, changeInput, clearInput, keyInput } = useInput();
  const { addItem, onItemRemove, onItemCheck } = useList();

  const clearInputAndAddItem = () => {
    clearInput();
    addItem(inputValue);
  };

  const { status, data, error  } = useQuery('getList', fetchList);

  if(status === 'success') {
    items.current = data
  }
  console.log(status)
  console.log(data);
  console.log(error);

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
};

export default App;
