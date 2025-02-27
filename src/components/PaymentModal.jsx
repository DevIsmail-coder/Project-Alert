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
const [togleClr2, setTogleClr2] = useState(false)
const [togleClr3, setTogleClr3] = useState(false)
const [ clr, setClr] = useState('black')
const [ clr2, setClr2] = useState('black')
const [ clr3, setClr3] = useState('black')
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
    // setClr2('#1fc26b')
    // setClr3('#1fc26b')
   }else{
    null
   }
}

const handleClrTogle2 = ()=>{
    setTogleClr2((prev)=>(!prev))
   if(togleClr2 === true){
    // setClr('#1fc26b')
    setClr2('#1fc26b')
    // setClr3('#1fc26b')
   }else{
    null
   }
}

const handleClrTogle3 = ()=>{
    setTogleClr3((prev)=>(!prev))
   if(togleClr3 === true){
    // setClr('#1fc26b')
    // setClr2('#1fc26b')
    setClr3('#1fc26b')
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
            <span style={{color:'#4ac282'}} className='ModalPopCard'>
            <PiCreditCardLight size={40} color='#4ac282'/>
            Card
            </span>
            <span className='ModalPopCard'>
            <FiSend size={50} />
            Transfer
            </span>

            <span className='ModalPopCard'>
            <CiBank size={40} />
            Bank
            </span>

            <span style={{fontWeight:'bold'}} className='ModalPopCard'>
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
            <span style={togleClr?{borderColor:clr}:{borderColor:'black'}}>

                {togleClr?<FaRegCircle style={{cursor:'pointer'}} onClick={handleClrTogle} color={clr}/>:<FaRegCircle style={{cursor:'pointer'}} onClick={handleClrTogle} color='black'/>}
                Success
            </span>

            <span style={togleClr2?{borderColor:clr2}:{borderColor:'black'}}>
            {togleClr2?<FaRegCircle style={{cursor:'pointer'}} onClick={handleClrTogle2} color={clr2}/>:<FaRegCircle style={{cursor:'pointer'}} onClick={handleClrTogle2} color='black'/>}
                Bank Authorization
            </span>

            <span style={togleClr3?{borderColor:clr3}:{borderColor:'black'}}>
            {togleClr3?<FaRegCircle style={{cursor:'pointer'}} onClick={handleClrTogle3} color={clr3}/>:<FaRegCircle style={{cursor:'pointer'}} onClick={handleClrTogle3} color='black'/>}
                Declined
            </span>
        </div>
      <button onClick={handleSucessTogle} className='modalBtn'>Pay NGN***</button>
      <p>use another card</p>
      </div>
    </div> :<div className='successModal'>
        <MdVerified size={150} color='#13ad5b'/>
        SUCCESSFUL
        </div>}
   </>
  )
}

export default PaymentModal
