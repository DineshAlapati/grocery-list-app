import React, { memo } from "react";
import { List, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import GroceryListItem from "../GroceryListItem/GroceryListItem";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
  },
  list: {
    overflow: "scroll",
  },
}));

const GroceryList = memo((props) => {
  const styles = useStyles();

  if (!props || !props.items || !props.items.length > 0) return null;

  return (
    <>
      <Paper className={styles.paper}>
        <List className={styles.list}>
          {props.items.map((itemProps, idx) => (
            <GroceryListItem
              {...itemProps}
              key={`GroceryItem.${idx}`}
              divider={idx !== props.items.length - 1}
              onDeleteButtonClick={() => props.onItemRemove(idx)}
              onCheckButtonClick={() => props.onItemCheck(idx)}
            />
          ))}
        </List>
      </Paper>
    </>
  );
});

export default GroceryList;
