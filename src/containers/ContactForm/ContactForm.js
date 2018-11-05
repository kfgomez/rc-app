import React, { Component } from 'react'; 
import './ContactForm.css';
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
    handleSubmitForm=(e)=>{
        e.preventDefault();
        const data = this.state;
        this.props.submitForm(data);
        this.setState({
            contact_name: '',
            contact_email: '',
            description: '',
        });
    }
    render(){
        let disabled=Object.values(this.state).some(el=>el==='');
        return(
            <div className="form-container">
                <form onSubmit={this.handleSubmitForm}>
                <input 
                name="contact_name"
                value={this.state.contact_name}
                onChange={this.onChangeHandler}
                placeholder="Name"/>
                <input 
                name="contact_email"
                value={this.state.contact_email}
                type="email"
                onChange={this.onChangeHandler}
                placeholder="Email"
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