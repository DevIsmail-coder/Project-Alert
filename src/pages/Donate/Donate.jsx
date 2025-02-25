import React from 'react'
import './Donate.css'
import  { useState } from 'react'
import { FaLock } from "react-icons/fa";
import { GiLifeSupport } from "react-icons/gi";
import { FaRibbon } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";

import { LiaTimesSolid } from "react-icons/lia";
import PaymentModal from '../../components/PaymentModal';

const Donate = () => {
    const [clrTogle, setClrTogle] = useState(true)
  const [openModal, setOpenModal] = useState(false)


  const handleOpenModalTogle = ()=>{
    setOpenModal((prev)=>(!prev))
  }

  const handleClrTogle = () => {
    setClrTogle((prev) => (!prev))
  }

  return (
    <>
    <div className='donatePage'>
      <div className='header'>
        <h1>HEADER</h1>
      </div>
      <div className='donateHeader'>
        <h1 style={{ color: 'purple' }}>Donate</h1>
        <h1>WE'd Love Your Support</h1>
      </div>
      <div className='paymentWrapper'>
        <div className='dailyMonthlyPlans'>
          <span onClick={handleClrTogle} className={clrTogle ? 'giveOnce' : 'monthly'}>Give Once</span>
          <span onClick={handleClrTogle} className={clrTogle ? 'monthly' : 'giveOnce'}>Monthly</span>
        </div>
        <div className='amountDiv'>
          <span className='chooseAmount'>{clrTogle ? 'Choose an amount' : 'Choose an amount to give per Month'}</span>
          <div className='donationAmounts'>
            <div className='amounts'>
              <span>N100<smal>NGN</smal></span>
              <span>N100<smal>NGN</smal></span>
              <span>N100<smal>NGN</smal></span>
            </div>
            <div className='amounts'>
              <span>N100<smal>NGN</smal></span>
              <span className='bigSpan'>N100<smal>NGN</smal></span>
            </div>
            <button onClick={handleOpenModalTogle}>Join Today</button>
          </div>
          <div className='secureDiv'>
            <FaLock size={25} />
            <span>
              <p>Secure Payment This Site is Protected by reCAPTCHA and the </p>
              <p>Google Privacy Policy Terms of Service Apply.</p>
            </span>
          </div>
        </div>
      </div>
      <div className='img2'>
        <img src="/img1" alt="" />
      </div>
      <div className='img1'>

      </div>
      <div className='footer2Wrapper'>
        <span className='footerText'>
          <h1 style={{ color: '#9f76cf' }}>know that your donation is making a diffrence</h1>
          <p>project alert uses 100% of your donation to support women affected by voilence,providing</p>
          <p>them with  vital resources,counseling and advocacy, while sharing impactful stories to the</p>
          <p>lives you've helped trnsform</p>
        </span>

        <div className='motivationCards'>

          <span className='motivationCard'>
            <div className='icon'><GiLifeSupport size={100} color='#7f47bf'/></div>
            <div className='tittle'>
              <h1>Counseling & emotional</h1>
              <h2>Support</h2>
            </div>
            <div className='content'>
                <p>
                Free trauma counseling for<br/> 
                survivors of domestic violence,<br/>
                sexual abuse,and other forms of<br/>abuse and Psychological support to
                <br/>help survivors rebuild their<br/>
                confidence and mental well-being.
                </p>
            </div>
          </span>

          <span className='motivationCard'>
            <div className='icon'><FaRibbon size={100} color='#7f47bf'/></div>
            <div className='tittle'>
              <h1>Awareness & Public</h1>
              <h2>Education</h2>
            </div>
            <div className='content'>
                <p>
               organizing campaigns,workshops<br/> 
              and seminars to educate<br/>
                comunities on gender-based<br/>
              voilence and to training for law
                <br/>enforcement,health workers,and<br/>
               the public on how to support<br/>
               survivors
                </p>
            </div>
          </span>

          <span className='motivationCard'>
            <div className='icon'><GiLifeSupport size={100} color='#7f47bf'/></div>
            <div className='tittle'>
              <h1>Legal Aid & Advocacy</h1>
              {/* <h2>Support</h2> */}
            </div>
            <div className='content'>
                <p>
              providing survivors with legal<br/> 
              guidence and represention to<br/>
             seek justice and advocacy for
                <br/>stranger lawa and policies to<br/>
                protect women and children form<br/>
                voilence
                </p>
            </div>
          </span>

          <span className='motivationCard'>
            <div className='icon'><MdLibraryBooks size={100} color='#7f47bf'/></div>
            <div className='tittle'>
              <h1>Reasearch & </h1>
              <h2> Documentation</h2>
            </div>
            <div className='content'>
            <p>
               Collectin datas and report on<br/> 
               violence against women and<br/>
               children in nigeria.using reasearch
                <br/>to influence policy changes and <br/>
                advocacy efforts.
                </p>
            </div>
          </span>

        </div>
      </div>
      <div className='footerWrapper'>
        <h1>Footer</h1>
      </div>
    </div>
      <div className='modal'>
       <span className='closeModal'><LiaTimesSolid size={30} onClick={handleOpenModalTogle}/></span>
      {openModal?<PaymentModal/>:null}
      </div>
    </>
  )
  
}

export default Donate
