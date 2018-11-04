import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

class App extends Component {
  state={
    showSideDrawer: false,
    showBackDrop: false, 
  }
  showSideDrawerHandler=()=>{
    this.setState({
      showSideDrawer: true,
      showBackDrop: true,
    });
  }
  hideSideDrawerHandler=()=>{
    this.setState({
      showSideDrawer: false,
      showBackDrop: false,
    });
  }
  render() {
    let backdrop=null;
    if(this.state.showSideDrawer){
      backdrop=<Backdrop 
      hideSideDrawerHandler={this.hideSideDrawerHandler}/>;
    }
    return (
      <BrowserRouter>
      <div className="App">
      <Toolbar 
      showSideDrawerHandler={this.showSideDrawerHandler}/>
      <SideDrawer show={this.state.showSideDrawer}/>
      {backdrop}
      <div className="spacer"/>
      <Route exact path="/contact" 
      component={Contact}/>
      <Route exact path="/about" 
      render={()=>(<About />)}/>
      <Route exact path="/"
      render={()=>(<Home />)}/>
      <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
