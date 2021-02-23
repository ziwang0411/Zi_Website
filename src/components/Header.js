import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../avatar.png";
import Typed from "react-typed";
const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="avatar" />
      <Typography variant="h4">
        <Typed strings={[Welcome]} />
      </Typography>
    </Box>
  );
};

export default Header;
