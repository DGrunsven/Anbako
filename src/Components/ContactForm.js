import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href =
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  const form = useRef();

  const notify = () => toast.success("Bericht verzonden!");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s2sa9rn",
        "template_l35kqta",
        form.current,
        "SAL3sEwUAwFhpFANt"
      )
      .then(
        (result) => {
          setTimeout(() => {}, 100);
          notify();
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="lg:flex flex-row space-x-4 justify-around w-full gap-3">
      <form
        class="mx-auto lg:mx-0 mw-full max-w-lg lg:w-1/2"
        ref={form}
        onSubmit={sendEmail}
        method="POST"
      >
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Naam*
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-800"
              id="grid-first-name"
              type="text"
              placeholder="Voornaam"
              name="user_voornaam"
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Achternaam*
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-800"
              id="grid-last-name"
              type="text"
              placeholder="Achternaam"
              name="user_achternaam"
              required
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              E-mail*
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-800"
              id="email"
              type="email"
              name="user_email"
              required=""
              oninvalid="this.setCustomValidity('Enter User Name Here')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Telefoonnummer
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-800"
              id="email"
              type="tel"
              name="user_tel"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Uw bericht*
            </label>
            <textarea
              class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-800 h-48 resize-none"
              id="message"
              placeholder="Uw bericht"
              name="message"
              required
            ></textarea>
          </div>
        </div>
        <div class="md:flex pb-10">
          <ReCAPTCHA
            sitekey="6LfRg9AjAAAAAMfJclBAIo4yv7PWT7SKa2PueoE2"
            onChange={onChange}
          />
        </div>
        <div class="md:flex md:items-center justify around pb-8">
          <div class="md:w-1/3">
            <button
              class="shadow bg-red-800 hover:bg-black-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Verzend bericht
            </button>
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable={false}
              pauseOnHover
              theme="light"
            />
          </div>
        </div>
      </form>
      <div className="w-full h-96 lg:w-1/2 lg:h-auto">
        <iframe
          title="googleMaps"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=nl&amp;q=Vlierdenseweg%20169+(Anbako)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
