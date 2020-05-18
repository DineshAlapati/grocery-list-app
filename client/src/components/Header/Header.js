import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  grid: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
  },
}));

const Header = memo((props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="list"
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Grocery List
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" className={classes.grid}>
        <Grid xs={12} md={6} item>
          {props.children}
        </Grid>
      </Grid>
    </div>
  );
});

export default Header;
