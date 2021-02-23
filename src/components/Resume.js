import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import ParticleAnim from "./ParticleAnim";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
  },
});

const Resume = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      {ParticleAnim()}
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center">
          working experience
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Resume;
