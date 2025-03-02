import React, { useState } from "react";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";
import "./ContactUs.css";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { VscCallIncoming } from "react-icons/vsc";
import { IoToggle } from "react-icons/io5";

const ContactUs = () => {
  const [showColor, setShowColor] = useState(false);
  return (
    <>
      <Header />
      <div className="ContactUs">
        <div className="ContactUsHeader">
          <h4>CONTACT US</h4>
          <h1>We’d love to talk to you</h1>
        </div>
        <div className="ContactUsBody">
          <div className="ContactUsBodyBox1">
            <div className="ContactUsBodyBox1Small">
              <div className="ContactUsBodyBox1Small1">
                <h4>REPORT A CASE</h4>
                <h1>You're Not Alone. We're Here to Help.</h1>
                <p>
                  If you or someone you know is experiencing abuse, speak up
                  today. Your safety and well-being matters. Every report is
                  confidential and will be handle with care and urgency.
                </p>
              </div>
              <div className="ContactUsBodyBox1Small2">
                <div className="contactusinput">
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Last name" />
                </div>
                <div className="contactusinput">
                  <input type="text" placeholder="Enter email address" />
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className="contactusinput">
                  <input type="text" placeholder="Who is the Victim?" />
                  <input type="text" placeholder="Type of Abuse" />
                </div>
                <textarea name="" id="" className="contactarea" placeholder="Brief Desription"></textarea>
                <input type="text" placeholder="Location of incident" className="inputlocation" />
                <article className="togglediv"> <p>Do you need immediate help?</p> 
                <IoToggle className="togicon" onClick={() => setShowColor(!showColor)}  style={{color: showColor ? "#1FC16B" : "black"}}/> 
                </article>
                <div className="contactbutton">
                  <button>Submit</button>
                </div>
              </div>

            </div>
          </div>

          <div className="ContactUsBodyCallUs">
            <div className="ContactUsBodyCallUsSmall">
              <div className="ContactUsSmall">
                <VscCallIncoming className="Icon" />
                <div className="ContactUsSmall2">
                  <h4>CALL US</h4>
                  <h3>+234 818 0091 072</h3>
                </div>

              </div>

              <div className="ContactUsSmall">
                <HiOutlineMail className="Icon" />
                <div className="ContactUsSmall2">
                  <h4>EMAIL US</h4>
                  <h3>info@projectalertnig.org</h3>
                </div>
              </div>

              <div className="ContactUsSmall">
                <FaLocationDot className="Icon" />
                <div className="ContactUsSmall2">
                  <h4>HEADSQUATERS</h4>
                  <h3>Lagos,Nigeria.</h3>
                </div>

              </div>
            </div>
          </div>
          <div className="ContactUsLocation">
            <div className="ContactUsLocationHeader">
              <h4>ADDRESSES</h4>
              <h2>Our Location</h2>
            </div>

            <div className="ContactUsLocationBox">
              <div className="ContactUsLocationBoxSmall">
                <div className="ContactUsLocationBoxSmall1">
                  <section className="SmallBox">
                    <h1>Lagos</h1>
                    <p> Innocent Chukwuma House 21, Akinsanya street Off Isheri Road, Taiwo Bustop (Behind FRSC) Ojodu, Berger P.O. Box 15456, Ikeja Lagos, Nigeria.   </p>
                  </section>

                  <section className="SmallBox2">
                    <img className="Img" src="public/map.png" alt="map" />
                  </section>
                </div>

                <div className="ContactUsLocationBoxSmall1">
                  <section className="SmallBox">
                    <h1>Abuja</h1>
                    <p>Innocent Chukwuma House 27, Moses Majekodunmi Crescent, Opp Keystone Bank, Utako, Abuja  Abuja, Nigeria.   </p>
                  </section>

                  <section className="SmallBox2">
                    <img className="Img" src="public/map.png" alt="map" />
                  </section>
                </div>
              </div>
            </div>
          </div>
          <Filter />
        </div>

      </div>
    </>

  );
};

export default ContactUs;
