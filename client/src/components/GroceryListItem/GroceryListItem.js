import React from "react";

import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const GroceryListItem = ({
  text,
  status,
  divider = false,
  onCheckButtonClick,
  onDeleteButtonClick,
} = {}) => {
  if (!text) return null;

  const isChecked = status === "checked";

  return (
    <ListItem divider={divider}>
      <ListItemText
        primary={text}
        style={isChecked ? { textDecoration: "line-through solid" } : {}}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Done" onClick={onCheckButtonClick}>
          <CheckCircleIcon color="primary" />
        </IconButton>
        <IconButton aria-label="Delete" onClick={onDeleteButtonClick}>
          <DeleteOutlined color="secondary" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default GroceryListItem;
