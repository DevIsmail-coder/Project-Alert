import React, { useEffect, useState } from 'react'
import './payment.css'
import { Button, Modal } from 'antd';
import { TbCreditCard } from "react-icons/tb";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';



const Payment = () => {

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [ModalOpen, setModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(0)


  const navigate = useNavigate();

  const closemodal = () => {
    setIsModalOpen(false);
  };
  const closesmodal = () => {
    setModalOpen(false);
  };

  const showPayment = () => {
    setModalOpen(true)

  }
  useEffect(() => {
    setIsModalOpen(true);
  }, [])

  return (
    <>

      <Modal open={isModalOpen}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        onCancel={closemodal}

      >
        <div className='bgs'>
          <div className='headings'>
            <div className='boxs'>

              <h2>PAY WITH</h2>
            </div>

          </div>
          <div className='holder_icon'>

            <div className='card_icons' style={{
              color: isActive === 0 ? "green" : ""
            }} onClick={() => {
              setIsActive(0)
              showPayment();
            }}><TbCreditCard size={28} /> <h3>Card</h3></div>

            <div className='plane_icon' style={{
              color: isActive === 1 ? "green" : ""
            }} onClick={() => {
              setIsActive(1)
              showPayment();
            }} > <IoPaperPlaneOutline size={28} className='plane' /><h3>Transfer</h3></div>

            <div className='bank_icon' style={{
              color: isActive === 2 ? "green" : ""
            }} onClick={() => {
              setIsActive(2)
              showPayment();
            }}>  <CiBank size={28} className='bank' /><h3>Bank</h3></div>

            <div className='hash_icon' style={{
              color: isActive === 3 ? "green" : ""
            }} onClick={() => {
              setIsActive(3)
              showPayment();
            }}><section className='hash'>*#</section><h3>USSD</h3></div>
          </div>

          <Modal open={ModalOpen}
            okButtonProps={{ style: { display: 'none' } }}
            cancelButtonProps={{ style: { display: 'none' } }}
            onCancel={closesmodal}>
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
                  <h2 style={{ color: "#1FC16B" }}>NGN<sup className='star' style={{ color: "#1FC16B" }}>****</sup></h2>
                </div>

              </div>
              <div className='subtitle'>
                <p className='text'>Use any of the options below to test the <br />payment flow</p>
              </div>
              <div className='input_holder'>
                <div className='cover'>
                  <input type="radio" name='pay' />
                  <span>Success</span>
                </div>
                <div className='cover'>
                  <input type="radio" name='pay' />
                  <span>Bank Authentication</span>
                </div>
                <div className='cover'>
                  <input type="radio" name='pay' />
                  <span>Declined</span>
                </div>
                <button onClick={() => navigate('/success')}> <h2>pay</h2><h2 style={{ color: "white" }}>NGN<sup style={{ color: "white", marginLeft: "30" }}>****</sup></h2></button>
                <h3 className='last'>Use another card</h3>
              </div>


            </div>
          </Modal>

        </div>
      </Modal>




    </>
  )
}

export default Payment
