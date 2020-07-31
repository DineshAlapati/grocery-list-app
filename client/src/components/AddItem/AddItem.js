import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const AddItem = (props) => {
  const styles = useStyles();

  return (
    <Paper className={styles.paper}>
      <Grid container spacing={2}>
        <Grid xs={9} md={10} item>
          <TextField
            placeholder="Add Item here"
            value={props.inputValue}
            onChange={props.onInputChange}
            onKeyPress={props.onInputKeyPress}
            fullWidth
          />
        </Grid>
        <Grid xs={3} md={2} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={props.onButtonClick}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddItem;
