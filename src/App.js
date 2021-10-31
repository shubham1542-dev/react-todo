import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/Register" component={Signup}></Route>
        <Route path="/Home" component={Home}></Route>
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
};

export default App;
