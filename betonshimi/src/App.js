import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {Route,Switch} from "react-router-dom";
import Homepage from './components/Homepage';
import Product from './components/Product';
import Aboutus from './components/Aboutus';
import Contactus from './Contactus';
import Project from './components/Project';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/Project" component={Project}/>
            <Route path="/contactus" component={Contactus}/>
            <Route path="/aboutus" component={Aboutus}/>
            <Route path="/product" component={Product}/>
            <Route path="/" component={Homepage}/>
          </Switch>
        </div>
        
      </div>
    );
  }
}

export default App;
