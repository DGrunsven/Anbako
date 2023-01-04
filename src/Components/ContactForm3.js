import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm3 = () => {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_s2sa9rn', 'template_l35kqta', form.current, 'SAL3sEwUAwFhpFANt')
        .then((result) => {
              setTimeout(() => {
              setSubmitted(true);
              }, 100);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
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

    <form class="w-full max-w-lg" ref={form} onSubmit={sendEmail}>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Naam
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
      id="grid-first-name" 
      type="text" 
      placeholder="Voornaam" 
      name="user_voornaam"/>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Achternaam
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="grid-last-name" 
      type="text" 
      placeholder="Achternaam" 
      name="user_achternaam"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        E-mail
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="email" 
      type="email" 
      name="user_email"/>
    </div>
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Telefoonnummer
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="email" 
      type="tel" 
      name="user_tel"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Uw bericht
      </label>
      <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
      id="message"
      name="message"></textarea>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button class="shadow bg-red-400 hover:bg-black-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
      type="submit">
        Verzend bericht
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>
</form>
  );
};

export default ContactForm3;