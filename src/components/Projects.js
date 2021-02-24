import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/React.jpg";
import project4 from "../images/react-redux.jpg";
const useStyles = makeStyles({
  mainContainer: {},
  cardContainer: {
    maxWidth: 445,
    margin: "3rem auto",
  },
});
const Projects = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="200"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Duis pariatur consectetur Lorem qui. Ea velit commodo
                    aliquip mollit id officia ex labore. Occaecat excepteur
                    cillum dolor do deserunt incididunt culpa enim in est
                    nostrud aliquip nostrud. Labore est pariatur Lorem nulla do
                    enim eiusmod consectetur commodo elit quis esse
                    reprehenderit cillum. Irure ullamco adipisicing commodo eu
                    officia mollit qui elit magna. Duis nostrud labore officia
                    eiusmod enim.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="200"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Duis pariatur consectetur Lorem qui. Ea velit commodo
                    aliquip mollit id officia ex labore. Occaecat excepteur
                    cillum dolor do deserunt incididunt culpa enim in est
                    nostrud aliquip nostrud. Labore est pariatur Lorem nulla do
                    enim eiusmod consectetur commodo elit quis esse
                    reprehenderit cillum. Irure ullamco adipisicing commodo eu
                    officia mollit qui elit magna. Duis nostrud labore officia
                    eiusmod enim.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="200"
                  image={project3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Duis pariatur consectetur Lorem qui. Ea velit commodo
                    aliquip mollit id officia ex labore. Occaecat excepteur
                    cillum dolor do deserunt incididunt culpa enim in est
                    nostrud aliquip nostrud. Labore est pariatur Lorem nulla do
                    enim eiusmod consectetur commodo elit quis esse
                    reprehenderit cillum. Irure ullamco adipisicing commodo eu
                    officia mollit qui elit magna. Duis nostrud labore officia
                    eiusmod enim.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="200"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 4
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Duis pariatur consectetur Lorem qui. Ea velit commodo
                    aliquip mollit id officia ex labore. Occaecat excepteur
                    cillum dolor do deserunt incididunt culpa enim in est
                    nostrud aliquip nostrud. Labore est pariatur Lorem nulla do
                    enim eiusmod consectetur commodo elit quis esse
                    reprehenderit cillum. Irure ullamco adipisicing commodo eu
                    officia mollit qui elit magna. Duis nostrud labore officia
                    eiusmod enim.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Projects;
