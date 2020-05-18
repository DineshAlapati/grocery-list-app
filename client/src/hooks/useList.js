import { useState } from "react";

export default function useList(initialValue = []) {
  const [items, setItems] = useState(initialValue);

  const addItem = (text) => {
    if (text) {
      setItems(items.concat({ text, status: "added" }));
    }
  };

  const onItemRemove = (idx) => {
    setItems(items.filter((item, i) => i !== idx));
  };

  const onItemCheck = (idx) => {
    setItems(
      items.map((item, i) => {
        if (i === idx) {
          item.status = item.status === "checked" ? "added" : "checked";
        }
        return item;
      })
    );
  };

  return {
    items,
    addItem,
    onItemRemove,
    onItemCheck,
  };
}
