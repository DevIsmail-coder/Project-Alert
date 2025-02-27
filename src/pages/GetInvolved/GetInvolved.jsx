import React from 'react'
import './GetInvolved.css'
import Header from '../Header/Header'
import Filter from '../Filter/Filter'

const GetInvolved = () => {
  return (
    <div className='GetInvolvedbody'>
      <Header />
      <div className='GetInvolvedheader'>
        <h3 className='GetInvolvedh3'>GET INVOLVED</h3>
        <h1 className='GetInvolvedh1'>Let’s work together.</h1>
      </div>
      <div className='GetInvolvedcontainer'>
        <article className='GetInvolvedcontainer1'>
          <span className='GetInvolvedcontainer1span'>
          <p className='GetInvolvedcontainer1p'>ADDRESSES</p>
          <h3 className='GetInvolvedcontainer1h3'>Internship</h3>
          </span>
          <p className='GetInvolvedcontainer1pp'> An internship is a temporary position offering 
            practical experience and skill development in a specific field, often leading
             to future career opportunities.</p>
          <div className='GetInvolvedimagecontainer'>
            <img src='/intern form 1 (1).png' className='img'/>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSezT-2g1L27OREuo-9JfhqWRz-zE6_pvP_XlJXNUzz1HtD0jA/viewform'> 
            <button className='Filterbutton'>
              Click Here
            </button>
            </a>
          </div>
        </article>

        <article className='GetInvolvedcontainer1'> 
                <span className='GetInvolvedcontainer1span'>
          <p className='GetInvolvedcontainer1p'>ADDRESSES</p>
          <h3 className='GetInvolvedcontainer1h3'>Volunteer</h3>
          </span>
          <p className='GetInvolvedcontainer1pp'> A volunteer role involves offering time and skills 
            to help a cause or organization, typically without pay, while gaining experience and 
            contributing to the community.</p>
          <div className='GetInvolvedimagecontainer'>
            <img src='/intern form 1 (1).png' className='img'/>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSeTvOw9q4aBX--yakW_ED5wnAUUqADYLvA7l9Ddi43DsrsI0Q/viewform?pli=1'> 
            <button className='Filterbutton'>
              Click Here
            </button>
            </a>
          </div>  
        </article>
      </div>
      <Filter />
    </div>
  )
}

export default GetInvolved
