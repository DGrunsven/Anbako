import React from "react";
import "./OverOns.css";
import anne from "./../Images/anne.png";
import herman from "./../Images/herman.png";

export default function OverOns() {
  return (
    <>
      <div className="overOns">
        <div className="cards_container">
          <div className="cards_wrapper">
            <div className="cards">
              <div className="text-wrapper">
                <h1 className="main_heading">Over ons</h1>
                <p className="over-ons-text">
                  ANBAKO Administratie is in 2005 gestart door Herman. Per 1
                  januari 2023 is het kantoor in een gezamenlijke vorm
                  voortgezet met dochter Anne.
                </p>
                <br></br>
                <p className="over-ons-text">
                  Wij richten ons met name op het MKB en particulieren. Hierin
                  staan persoonlijk contact en een laagdrempelige benadering
                  centraal. Het uitgangspunt is om maatwerk te leveren door
                  klantgericht te werken. Het is voor ons belangrijk om uw
                  administratie naar uw wens in te richten en nemen daarbij
                  graag de administratieve werkzaamheden uit handen. De mate
                  waarin, bepaalt u zelf. Neem geheel vrijblijvend contact met
                  ons op om de mogelijkheden voor u of uw onderneming te
                  bespreken.
                </p>
                <br></br>
                <p className="over-ons-text">
                  Neem geheel vrijblijvend contact met ons op om de
                  mogelijkheden voor u of uw onderneming te bespreken.
                </p>
                <br></br>
              </div>
              <div className="contact-container">
                <div className="contact-card-container">
                  <img src={herman} alt="Herman" className="contact-foto" />
                  <div className="contact-text">
                    <p className="contact-naam">Herman Janssen</p>
                    <a className="ct" href="tel:0646438073">
                      06 46438073
                    </a>
                    <a className="ct" href="mailto: herman@anbako.nl">
                      herman@anbako.nl
                    </a>
                  </div>
                </div>
                <div className="contact-card-container">
                  <img src={anne} alt="Anne" className="contact-foto" />
                  <div className="contact-text">
                    <p className="contact-naam">Anne van Dinther-Janssen</p>
                    <a className="ct" href="tel:0631907197">
                      06 31907197
                    </a>
                    <a className="ct" href="mailto: anne@anbako.nl">
                      anne@anbako.nl
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
