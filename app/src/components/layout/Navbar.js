import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/thumbnail.png";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: 40,
  },
  img: {
    height: 45,
    width: 45,
    paddingRight: 10,
  },
  appbar: {
    display: "flex",
    height: "9vh",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title}>
            <Link to="/" className={classes.link}>
              <img src={logo} className={classes.img} alt="logo" />
              Covid 19 Tracker
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
