import React from "react";
import Sidebar from "./components/navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Reports from "./components/pages/Reports";




function App() {
  return (
    <>
      <Router>
        <Sidebar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/reports' component={Reports}/>
            <Route path='/products' component={Products}/>
          </Switch>
      </Router>

    </>
  );
}

export default App;
