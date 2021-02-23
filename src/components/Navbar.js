import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobilLeftMenuSlider from "@material-ui/core/drawer";

import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  Slider,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../avatar.png";

//CSS Styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
    margin: "0.5rem auto",
  },
  listText: {
    color: "white",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    left: false,
  });
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => {
    return (
      <Box
        className={classes.menuSliderContainer}
        component="div"
        onClick={toggleSlider(slider, false)}
      >
        <Avatar className={classes.avatar} src={avatar} alt="avatar" />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key}>
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listText}
                primary={lsItem.listText}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };
  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("left", true)}>
              <ArrowBack style={{ color: "gold" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobilLeftMenuSlider
              open={state.left}
              onClose={toggleSlider("left", false)}
              anchor="left"
            >
              {sideList("left")}
            </MobilLeftMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
