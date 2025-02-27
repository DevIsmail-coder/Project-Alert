import React, {useState} from 'react'
import './Payment.css'
import { Button, Modal } from 'antd';

const Payment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  const closemodal = () => {
    setIsModalOpen(false);
  }
   
  return (
    <>
    <Button type="primary" onClick={showModal}>
      Open Modal
    </Button>
    <Modal  open={isModalOpen} 
    okButtonProps={{style:{display:'none'}}} 
    cancelButtonProps={{style:{display:'none'}}} 
    onCancel={closemodal}>
  <div className='bg'>
      <div className='heading'>
          <div className='box'>
 <article className='one'></article>
 <article className='two'></article>
 <article className='three'></article>
 <article className='four'></article>
 </div>
 <div className='box_two'>
  <h2 className='v'>pay</h2>
  <h2 style={{color:"#1FC16B"}}>NGN<sup className='star' style={{color:"#1FC16B"}}>****</sup></h2>
 </div>

      </div>
      <div className='subtitle'>
        <p className='text'>Use any of the options below to test the <br/>payment flow</p>
      </div>
      <div className='input_holder'>
          <div className='cover'>
              <input type="radio" />
              <span>Success</span>
          </div>
          <div className='cover'>
          <input type="radio" />
          <span>Bank Authentication</span>
          </div>
          <div className='cover'>
          <input type="radio" />
          <span>Declined</span>
          </div>
          <button> <h2>pay</h2><h2 style={{color:"white"}}>NGN<sup style={{color:"white", marginLeft:"30"}}>****</sup></h2></button>
          <h3 className='last'>Use another card</h3>
      </div>
  </div>
    </Modal>
  </>
  )
}

export default Payment
