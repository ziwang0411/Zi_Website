import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { makeStyles } from "@material-ui/styles";
import ParticleAnim from "./ParticleAnim";
const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    color: "red",
    opacity: 0.5,
  },
});
const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      {ParticleAnim()}
    </React.Fragment>
  );
};

export default Home;
