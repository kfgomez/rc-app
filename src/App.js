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
import axios from 'axios';
import Alert from './components/Alert/Alert';

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
      url: 'https://rc-projects-kev9504.c9users.io:8081/projects/contact',
    }).then(res=>this.setState({
      showAlert: true,
      message: 'Thank you for your message. We will contact you shortly',
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
      <Route 
      exact 
      path="/contact" 
      render={()=>(<Contact 
      submitForm={this.submitFormHandler}/>)}/>
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
