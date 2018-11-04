import React from 'react';
import './Contact.css';
import ContactForm from '../../containers/ContactForm/ContactForm';

const contact=()=>(
    <div className="contact-wrapper">
        <div className="form-panel">
            <h2>Let us know your inquiries</h2>
            <ContactForm />
        </div>
    </div>
    );
    
export default contact;