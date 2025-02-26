import React from 'react'
import "./AboutUs.css"
import Header from '../Header/Header'
import Filter from '../Filter/Filter'

const AboutUs = () => {
  return (
    <div>
      < Header/>
      <div className='AboutUsmain'>
    <div className='Know-us-more'>
      <div className='inner-block'>
        <div className='about-us'><h3>ABOUT US</h3></div>
        <div className='know-more'><h1>Know us more</h1></div>
      </div>
    </div>
    <div className='space-div'></div>
    <div className='founder-div'>
      <div className='founder-div-wrap'>
        <div className='founder-image'>
          <img src="/src/assets/Frame 137.png" alt="" />
        </div>
        <div className='founder-biography'>
          <div className='founder-header-div'><h4>ABOUT THE FOUNDER</h4></div>
          <div className='founder-second-header-div'><h1>Josephine Effah-Chukwuma</h1></div>
          <div className='founder-last-header-div'><p>Josephine Effah-Chukwuma is a passionate women's rights advocate, socail worker, and activist, dedicated to the fight against gender-based violence (GBV) in Nigeria. She founded Project Alert on Violence Against Women in 1999, making it one of the first NGOs in Nigeria to provide direct support services for survivors of abuse.</p>
          <p>With decades of experience in advocacy, policy reform, and survivor support, josephine has been instrumental in raising awareness, influencing laws, and providing safe spaces for victims of domestic and sexual violence. Her work has earned her recognition both locally and internationally, solidifying her impact in the fight for women's rights and justice.</p></div>
        </div>
      </div>
    </div>
    <div className='Pledge-dive'>
      <div className='Pledge-dive-wrap'>
        <div className='our-vision'>
          <div className='feedback-top'><h3>FEEDBACKS</h3></div>
          <div className='our-vision-main'><h1>Our Vision</h1></div>
          <div className='our-vision-text'><p>A well-informed society where there is zero tolerance for all forms of violence against women</p></div>
        </div>
        <div className='our-mission'>
        <div className='feedback-top'><h3>FEEDBACKS</h3></div>
          <div className='our-vision-main'><h1>Our Mission</h1></div>
          <div className='our-vision-text'><p>To educate the society on the forms and prevalence of violence against women and render practical support to female victims of violence</p></div>
        </div>
        <div className='our-value'>
        <div className='feedback-top'><h3>FEEDBACKS</h3></div>
          <div className='our-vision-main'><h1>Our Values</h1></div>
          <div className='our-vision-text'><p>The dignity of the human person, Freedom from Torture, Bodly Integrity, Equal Opportunity, Non-discrimination</p></div>
        </div>
      </div>
    </div>
</div>
<Filter/>
    </div>
  )
}

export default AboutUs
