import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {Route,Switch} from "react-router-dom";
import Homepage from './components/Homepage';
import Product from './components/Product';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Project from './components/Project';
import Footer from './components/Footer';
import { Fragment } from 'react';
import ScrollButton from './components/ScrollButton';
import Product1 from './components/Product1/Product1';
import Product2 from './components/Product1/Product2';
import Product3 from './components/Product1/Product3';
import GroutB100 from "./product2/GroutB100";
import GroutBs120 from './product2/GroutBs120';
import GroutBs110 from './product2/GroutBs110';
import Repair from './product2/Repair';



class App extends Component {
  render() {
    return (
      <div>
         <Fragment>
         <Navbar/>
            
            <ScrollButton />
          </Fragment>
          
        <div>
          <Switch>
            <Route path="/ترمیم/:id" component={Repair}/>
            <Route path="/گروت/گروت-bs110" component={GroutBs110}/>
            <Route path="/گروت/گروت-bs120" component={GroutBs120}/>
            <Route path="/گروت/گروت-b100" component={GroutB100}/>
            <Route path="/روان-کننده-ها/فوق-روان‌-کننده-BS405" component={Product3}/>
            <Route path="/روان-کننده-ها/ابر-روان‌-کننده-BS410" component={Product2}/>
            <Route path="/روان-کننده-ها/سوپر-روان-کننده-ها" component={Product1}/>
            <Route path="/Project" component={Project}/>
            <Route path="/contactus" component={Contactus}/>
            <Route path="/aboutus" component={Aboutus}/>
            <Route path="/product" component={Product}/>
            <Route path="/" component={Homepage}/>
          </Switch>
        </div>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
