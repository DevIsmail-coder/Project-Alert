import React from 'react'
import './Filter.css'
import { LiaFacebook } from "react-icons/lia";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiYoutubeLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Filter = () => {
    const navigate = useNavigate()
    return (
        <div className='Filterbody'>
            <div className='Filtermain'>
                <article className='Filtercontainer1'>
                    <span className='Filtermainwrap' >
                        <h3 className='Filterheader'>Home</h3>
                        <span className='Filtercontainerlist'>
                            <p>What we do</p>
                            <p>Research and reports</p>
                            <p>Stories and features</p>
                            <p>Where we work</p>
                            <p>Press Centre</p>
                            <p>Take action</p>
                        </span>
                    </span>
                    <span className='Filtermainwrap' >
                        <h3 className='Filterheader'>Get Involved</h3>
                        <span className='Filtercontainerlist'>
                            <p>Report a case</p>
                            <p>Volunteer</p>
                            <p>Donate</p>
                            <p>Intern</p>
                        </span>
                    </span>
                    <span className='Filtermainwrap' >
                        <h3 className='Filterheader'>Company</h3>
                        <span className='Filtercontainerlist'>
                            <p>About us</p>
                            <p>Blog</p>
                            <p>Board of Trustes</p>
                        </span>
                    </span>
                </article>
                <article className='Filtercontainer2'>
                    <button className='filterbutton' onClick={() => navigate("/donate")}>Donate now</button>
                    <span className='filtericonspan'>
                        <LiaFacebook className='filtericons' />
                        <SlSocialLinkedin  className='filtericons1'/>
                        <RiYoutubeLine className='filtericons1'/>
                        <FaInstagram  className='filtericons1'/>
                    </span>
                </article>
            </div>
            <p className='filterptag'>© 2025 Project Alert. All Rights Reserved.</p>
        </div>
    )
}

export default Filter
