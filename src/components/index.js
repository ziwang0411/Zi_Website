import React from "react";
import Navbar from "./Navbar";
import PersistentNavBar from "./PersistentNavbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";
import { Sync } from "@material-ui/icons";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    color: "red",
  },
});
const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            color: {
              value: "random",
            },
            links: {
              color: {
                value: "random",
              },
              enable: true,
              opacity: 0.4,
              width: 2,
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                Sync: true,
              },
            },
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              Sync: true,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </React.Fragment>
  );
};

export default Home;
