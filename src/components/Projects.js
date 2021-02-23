import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import ParticleAnim from "./ParticleAnim";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
  },
});
const Projects = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      {ParticleAnim()}
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center">
          Projects
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Projects;
