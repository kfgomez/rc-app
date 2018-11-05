import React from 'react';
import './Contact.css';
import ContactForm from '../../containers/ContactForm/ContactForm';

const contact=(props)=>(
    <div className="contact-wrapper">
        <div className="form-panel">
            <h2>Let us know your inquiries</h2>
            <ContactForm 
            submitForm={props.submitForm}/>
        </div>
    </div>
    );
    
export default contact;