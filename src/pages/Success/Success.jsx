import React, {useEffect, useState} from 'react'
import { MdVerified } from "react-icons/md";
import {   Modal } from 'antd';
import { ClipLoader } from 'react-spinners';

const Success = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [verify, setVerify] = useState(true);
    // const [loading, setLoading] = useState(true)
    const [isActive, setActive] = useState(0)
  
        
           
          const closemodal = () => {
            setIsModalOpen(false);
          }


          useEffect(()=>{
            setIsModalOpen(true);
            setTimeout(()=>{
                setVerify(false)
            }, 2000)
            
          },[])


  return (
    <>
  
  <Modal  open={isModalOpen} 
  okButtonProps={{style:{display:'none'}}} 
  cancelButtonProps={{style:{display:'none'}}} 
  onCancel={closemodal}>
<div className='bg'  style={{width: "100%", height: "40vh", background: "white", gap: "20px", display: "flex", flexDirection: "column", justifyContent: "center", padding:"20px", alignItems: "center"}}>
     
    <div>
    {
      verify ? <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"

      }} ><ClipLoader color="#26db72" /><h1>Verifying...</h1> </div> : <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"

      }}> < MdVerified style={{fontSize: "80px", color: "green"}} /><h1>Success</h1></div>
    }
 
</div>

</div>
  </Modal> 
</>
  )
}

export default Success

