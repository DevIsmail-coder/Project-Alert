import React from 'react'
import "./Home.css"
import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import { useNavigate } from 'react-router-dom'

const Home = () => {

   const navigate = useNavigate();

  return (
    <div className='Hero-page'>
    < Header/>
    <div className='hero-wrap'>
        <div className='hero-img-main'>
            <div className='up-img-text'>
            <div className='inner-up-img-text-1'>
                <h1>Breaking the silence,</h1>
                <h1>Building a safer Future.</h1>
                <p>Providing safety, support, justice for women</p>
                <p>and children</p>
            </div>
            <div className='inner-up-img-text-2'>
                <div className='inner-btm-btn-div'>
                    <button onClick={()=>navigate("/contactus")} className='hero-page-btn-1'>Report a case</button>
                    <button onClick={()=>navigate("/donate")} className='hero-page-btn-2'>Donate now</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className='Who-are-were'>
        <div className='who-are-we-inner'>
        <div className='what-we-provide-img-1'>
            <img src="/public/HompageImg1.png" alt="put-image-here" />
            <div className='absolute-image-div'>
                <div className='absolute1-img'>
                    <img src="/public/HomePageimg2.png" alt="put-image-here" />
                </div>
                <div  className='absolute2-img'>
                    <img src="/public/HomePageImg3.png" alt="put-img-here" />
                </div>
            </div>
        </div>
        <div className='what-we-provide-img-2'>
          <div className='what-we-provide-img-2-wrap'>
            <div className='who-we-are-to-about-us-header'>
                <h2>WHO WE ARE</h2>
                <h1>About us</h1>
            </div>
            <div className='who-we-are-to-main-text'>
                <p>Violence against women is perhaps the most shameful human rights violation, and it is perhaps the most pervasive. It knows no boundaries of geography, culture or wealth. As long as it continues we cannot claim to be making real progress towards equality, development and peace.</p>
            </div>
            <div className='who-we-are-btn-down-btn'>
                <button  onClick={()=>navigate("/aboutus")} className='Read-more-btn'>Read More</button>
            </div>
          </div>
        </div>
        </div>
    </div>
    <div className='what-we-provide'></div>
    <Filter/>
</div>
  )
}

export default Home
