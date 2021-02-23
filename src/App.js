import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <CssBaseline />
      <Route path="/" exact component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
    </div>
  );
}

export default App;
