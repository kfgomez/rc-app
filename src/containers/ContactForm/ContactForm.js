import React, { Component } from 'react'; 
import './ContactForm.css';
import axios from 'axios';
class ContactForm extends Component{
    state={
        contact_name: '',
        contact_email: '',
        description: '',
    }
    onChangeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        });
    }
    submitForm=(e)=>{
        e.preventDefault();
        const data = this.state;
        axios({
            method: 'post',
            url: 'https://rc-projects-kev9504.c9users.io:8081/projects/contact',
            params: data,
        }).then(res=>console.log(res))
        .catch(err=>console.log(err));
    }
    render(){
        let disabled=Object.values(this.state).some(el=>el==='');
        return(
            <div className="form-container">
                <form onSubmit={this.submitForm}>
                <input 
                name="contact_name"
                value={this.state.contact_name}
                onChange={this.onChangeHandler}
                placeholder="Name..."/>
                <input 
                name="contact_email"
                value={this.state.contact_email}
                type="email"
                onChange={this.onChangeHandler}
                placeholder="Email..."
                />
                <textarea 
                name="description"
                value={this.state.description}
                onChange={this.onChangeHandler}
                placeholder="How may we help?"/>
                <input 
                type="submit" 
                value="send"
                disabled={disabled}
                className={disabled
                    ? 'disabled'
                    : null
                }/>
                </form>
            </div>
        );
    }
}

export default ContactForm;