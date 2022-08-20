import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    color: "white",
    paddingRight: "1.5rem",
  },
});

const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/products" className={classes.link}>
            Products
          </Link>
          <Link to="/contact-us" className={classes.link}>
            Contact Us
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
