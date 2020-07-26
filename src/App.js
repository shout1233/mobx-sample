import React from "react";
import Grid from "./components/Grid";
import { Route } from "react-router-dom";
import NotGrid from "./components/NotGrid";

function App() {
  return (
    <div>
      <Route path="/" exact component={Grid} />
      <Route path="/supermarket" exact component={NotGrid} />
    </div>
  );
}

export default App;
