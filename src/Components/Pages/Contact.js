import React from "react";
import "./Contact.css";
import ContactForm from "./../ContactForm";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-form-container">
          <h1>Contact</h1>
        </div>
        <p className="cf-text">
          Neem voor meer informatie vrijblijvend contact met ons op via het
          onderstaande contact formulier.
        </p>
        <div className="cf-content">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
