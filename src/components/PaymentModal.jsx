import React, { useState } from 'react'
import './paymentModal.css'
import { PiCreditCardLight } from "react-icons/pi";
import { FiSend } from "react-icons/fi";
import { CiBank } from "react-icons/ci";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegCircle } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";


const PaymentModal = () => {
const [togleClr, setTogleClr] = useState(false)
const [ clr, setClr] = useState('black')
// const [borderClr, setBorderClr] = useState('black')
const [suucessPay, setSuccessPay] = useState(true)


const handleSucessTogle =(e)=>{
    // e.preventDefault()
    setSuccessPay((prev)=>(!prev))
}


const handleClrTogle = ()=>{
    setTogleClr((prev)=>(!prev))
   if(togleClr === true){
    setClr('#1fc26b')
    // setBorderClr('#1fc26b')
   }else{
    null
   }
}

  return (
   <>
   {suucessPay? <div className='modalPopUp'>
      <div className='modalAside'>
            <div className='textHeader'>
                Pay with
            </div>
            <span style={{color:'#4ac282'}} className='card'>
            <PiCreditCardLight size={50} color='#4ac282'/>
            Card
            </span>
            <span className='card'>
            <FiSend size={50} />
            Transfer
            </span>

            <span className='card'>
            <CiBank size={50} />
            Bank
            </span>

            <span style={{fontWeight:'bold'}} className='card'>
            *#  USSD
            </span>
           
      </div>
      <div className='modalMain'>
        <div className='modalHeader'>
            <HiMenuAlt2 size={80} color='#0ba4db'/>
                <span>Pay <small style={{color:'#4ac282'}}>NGN****</small></span>
        </div>
        <div className='optionText'>
            use any of the options below to test the <br/> payment flow
        </div>
        <div className='selectPayment'>
            <span style={{borderColor:clr}}>
                {togleClr?<FaRegCircle onClick={handleClrTogle} color={clr}/>:<FaRegCircle onClick={handleClrTogle} color='black'/>}
                Success
            </span>

            <span>
                <FaRegCircle/>
                Bank Authorization
            </span>

            <span>
                <FaRegCircle/>
                Declined
            </span>
        </div>
      <button onClick={handleSucessTogle} className='modalBtn'>Pay NGN***</button>
      <p>use another card</p>
      </div>
    </div> :<div className='successModal'>
        <MdVerified size={200} color='#13ad5b'/>
        SUCCESSFUL
        </div>}
   </>
  )
}

export default PaymentModal
