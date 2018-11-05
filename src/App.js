import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import CatchAll from './components/CatchAll/CatchAll';
import Alert from './components/Alert/Alert';
import axios from 'axios';
class App extends Component {
  state={
    showSideDrawer: false,
    showBackDrop: false, 
    showAlert: false,
    message: '',
    alertType: '',
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
  submitFormHandler=(data)=>{
    axios({
      method: 'post',
      params: data,
      url: 'https://api.pm.redcarats.com/projects/contact',
    }).then(res=>this.setState({
      showAlert: true,
      message: 'Thank you for the message. We will contact you shortly',
      alertType: 'success'
    }))
    .catch(err=>{
      console.log(err);
      this.setState({
      showAlert: true,
      message: `something went wrong, please try again later.`,
      alertType: 'error'
    })});
  }
  closeAlertHandler=()=>{
    this.setState({showAlert: false});
  }
  render() {
    let backdrop=null;
    let alertComponent=null;
    if(this.state.showSideDrawer){
      backdrop=<Backdrop 
      hideSideDrawerHandler={this.hideSideDrawerHandler}/>;
    }
    if(this.state.showAlert){
      backdrop=<Backdrop hideSideDrawerHandler={this.closeAlertHandler}/>;
      alertComponent=<Alert 
      message={this.state.message} 
      closeAlertHandler={this.closeAlertHandler}
      type={this.state.alertType}/>;
    }
    return (
      <BrowserRouter>
      <div className="App">
      <Toolbar 
      showSideDrawerHandler={this.showSideDrawerHandler}/>
      {alertComponent}
      <SideDrawer show={this.state.showSideDrawer}/>
      {backdrop}
      <div className="spacer"/>
      <Switch>
      <Route 
      exact 
      path="/contact" 
      render={()=>(<Contact 
      submitForm={this.submitFormHandler}/>)}/>
      <Route exact path="/about" 
      render={()=>(<About />)}/>
      <Route exact path="/"
      render={()=>(<Home />)}/>
      <Route component={()=>(<CatchAll />)}
      />
      </Switch>
      <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
