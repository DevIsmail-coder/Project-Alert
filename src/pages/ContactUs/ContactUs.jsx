import React from "react";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";
import "./ContactUs.css";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { VscCallIncoming } from "react-icons/vsc";

const ContactUs = () => {
  return (
    <>
      <Header />
    <div className="ContactUs">
      <div className="ContactUsHeader">
        <h4>Contact Us</h4>
        <h1>We'd love to talk to you</h1>
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
              <div className="ContactUsBodyBox1Small2Box">
               <div className="InputBox">
               <input type="text" className="Input" placeholder="First name"/>   
               <input type="text" className="Input" placeholder="Last name"/>   
               </div>
               <div className="InputBox">
               <input type="text" className="Input" placeholder="Enther email address"/>   
               <input type="text" className="Input" placeholder="Phone number"/>   
               </div>
             
               <div className="InputBox">
               <input type="text" className="Input" placeholder="Who is the victim?"/>   
               <input type="text" className="Input" placeholder="Type of abuse: "/>   
               </div>

              </div>

              <div className="ContactUsBodyBox1Small2Box2">
                <textarea className="textarea" placeholder="Brief Description"/>
                <input type="text" placeholder="Location of incident" className="input2"/>
                <p>Do you need imediate help?</p>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div className="ContactUsBodyCallUs">
          <div className="ContactUsBodyCallUsSmall">
            <div className="ContactUsSmall">
              <div className="ContactUsSmall1">
                <VscCallIncoming className="Icon"/>
              </div>
              <div className="ContactUsSmall2">
                <h4>Call Us</h4>
                <h3>+234 818 0091 072</h3>
              </div>

            </div>

            <div className="ContactUsSmall">
              <div className="ContactUsSmall1">
                  <HiOutlineMail className="Icon"/>
              </div>
              <div className="ContactUsSmall2">
                <h4>Email Us</h4>
                <h3>info@projectalertnig.org</h3>
              </div>
            </div>

            <div className="ContactUsSmall">
              <div className="ContactUsSmall1">
                <div className="ContactUsSmall1Small">
                  <FaLocationDot className="Icon"/>
                </div>
              </div>  
              <div className="ContactUsSmall2">
                <h4>Headquaters</h4>
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
                    <p>Innocent Chukwuma House </p>
                      <p>21, Akinsanya street Off Isheri Road, Taiwo Bustop (Behind FRSC) Ojodu, Berger P.O. Box 15456, Ikeja Lagos, Nigeria.   </p>
                  </section>

                  <section className="SmallBox2">
                    <img className="Img" src="../ContactUs/Mappp.png" alt="map" />
                  </section>
                </div>

                <div className="ContactUsLocationBoxSmall1">
                  <section className="SmallBox">
                      <h1>Abuja</h1>
                    <p>Innocent Chukwuma House </p>
                      <p>27, Moses Majekodunmi Crescent, Opp Keystone Bank, Utako, Abuja  Abuja, Nigeria.   </p>
                  </section>

                  <section className="SmallBox2">
                    <img className="Img" src="../ContactUs/Mappp.png" alt="map" />
                  </section>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
      {/* <Filter /> */}
    </>

  );
};

export default ContactUs;
