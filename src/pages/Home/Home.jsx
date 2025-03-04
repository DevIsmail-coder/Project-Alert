import React from 'react'
import "./Home.css"
import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import { useNavigate } from 'react-router-dom'
import { GiLifeSupport } from "react-icons/gi";
import { FaRibbon } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";

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
                <p>Providing safety, support, justice for women and children</p>
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
            <img src="/HompageImg1.png" alt="put-image-here" />
            <div className='absolute-image-div'>
                <div className='absolute1-img'>
                    <img src="/HomePageimg2.png" alt="put-image-here" />
                </div>
                <div  className='absolute2-img'>
                    <img src="/HomePageImg3.png" alt="put-img-here" />
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
    <div className='what-we-provide'>
            <div className='Get-Involved-wrap'>
                <div className='what-we-provide-top'>
                    <h2>WHAT WE PROVIDE</h2>
                    <h1>Our Services</h1>
                </div>
                <div className='what-we-provide-btm'>
                    <div className='what-we-provide-btm-card-1'>
                        <div className='what-we-provide-btm-card-1-icon-div'><GiLifeSupport size={45} color='#7f47bf'/></div>
                        <h3>Counseling and Emotional Support</h3>
                            <p>Free trauma counselling for survivors of domestic violence, sexual abuse, and other rorms of abuse and psychological support to help survivors rebuild their confidence and mental well-being</p>
                    </div>
                    <div className='what-we-provide-btm-card-1'>
                    <div className='what-we-provide-btm-card-1-icon-div'>
                    <FaRibbon size={45} color='#7f47bf'/>
                    </div>
                    <h3>Awareness & Public Education</h3>
                        <p>Organizing campaigns, workshops, and seminars to educate communities on gender-based violence and to training ror law enforcement, health workers, and the public on how to support survivors.</p>
                    </div>
                    <div className='what-we-provide-btm-card-1'>
                    <div className='what-we-provide-btm-card-1-icon-div'>
                   <GiLifeSupport size={45} color='#7f47bf'/>
                    </div>
                    <h3>Legal Aid & Advocacy</h3>
                        <p>Providing survivors with legal guidance and representation to seek justice and advocacy for stronger laws and policies lo protect women and children from violence.</p>
                    </div>
                    <div className='what-we-provide-btm-card-1'>
                    <div className='what-we-provide-btm-card-1-icon-div'>
                         <MdLibraryBooks size={45} color='#7f47bf'/>
                    </div>
                    <h3>Research & Documentation</h3>      
                        <p>Collecting data and reports on violence against woren and children in Nigeria. Using research
                        to influence policy changes and advocacy efforts.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='Homecontainer3'>
            <div className='Homecontainer3main'>
              
            <div className='Homecontainer3header'>
            <p>FEEDBACKS</p>
            <h1>Testimonials</h1>
            </div>
                <div className='Homecontainer3wrap'>
       <article className='Homecontainer3card'>
        <div  className='Homecontainer3cardspan'></div>
        <p className='Homecontainer3cardtitle'>Nana Yaw Otoo</p>
        <p className='Homecontainer3show'>Hair sylist</p>
        <p className='Homecontainer3body'>"He made sure I had no access to money. I couldn't work, and I had to beg for money for even the smallest things."</p>
       </article>

       <article className='Homecontainer3card'>
        <div  className='Homecontainer3cardspan'></div>
        <p className='Homecontainer3cardtitle'>Veroll Sterling</p>
        <p className='Homecontainer3show'>CEO of Origin sopra</p>
        <p className='Homecontainer3body'>"When I reached out to Project Alert, I was at my breaking point. Living in fear had become my daily reality”"</p>
       </article>

       <article className='Homecontainer3card'>
        <div  className='Homecontainer3cardspan'></div>
        <p className='Homecontainer3cardtitle'>Clive Thibela</p>
        <p className='Homecontainer3show'>traditionist</p>
        <p className='Homecontainer3body'>""When I reached out to Project Alert, I was at my breaking point. Living in fear had become my daily reality”"</p>
       </article>
       
       <article className='Homecontainer3card'>
        <div  className='Homecontainer3cardspan'></div>
        <p className='Homecontainer3cardtitle'>Nana Yaw Otoo</p>
        <p className='Homecontainer3show'>Hair sylist</p>
        <p className='Homecontainer3body'>"I found the strength to reclaim my life and my voice Today, I live without fear and with hope for brighter 
            furture
            "</p>
       </article>
                </div>
            </div>
        </div>
        <div className='button-div'>
      <div className='inner-button-div'>
        <div className='break-the-silence'>
          <h1>Break the Silence</h1>
          <h1>Take a Stand.</h1>
        </div>
        <div className='report-donate-div'>
          <div className='btn-hold-inner'>
            <button className='report-a-case-btn'>Report a case</button>
            <button className='donate-now-btn'>Donate now</button>
          </div>
        </div>
      </div>
    </div>
    <Filter/>
</div>
  )
}

export default Home
