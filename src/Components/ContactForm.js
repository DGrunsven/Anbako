import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s2sa9rn', 'template_l35kqta', form.current, 'SAL3sEwUAwFhpFANt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })

      setTimeout(() => {
        setSubmitted(true);
      }, 100);
      if (submitted) {
        return (
          <>
            <div className="text-2xl">Bedankt!</div>
            <div className="text-md">We nemen zo spoedig mogelijk contact op.</div>
          </>
        );
      }
      ;
  };


  return (
    <form
    ref={form} onSubmit={sendEmail}
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Uw naam"
          name="user_name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          title="Geen geldige naam"
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          oninvalid="this.setCustomValidity('Email adres is niet valide')"
          onvalid="this.setCustomValidity('')"
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="tel"
          placeholder="Telefoonnummer"
          name="user_tel"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          oninvalid="this.setCustomValidity('Telefoonnummer is niet valide')"
          onvalid="this.setCustomValidity('')"
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Uw bericht"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          oninvalid="this.setCustomValidity('Het bericht moet inhoud bevatten')"
          onvalid="this.setCustomValidity('')"
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Verzend bericht
        </button>
      </div>
    </form>
  );
};

export default ContactForm;