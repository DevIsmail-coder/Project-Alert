import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='Headerbody'>
      <article className='Headerdiv'>
        <h3 className='Headerdivh3'>Project Alert</h3>
      </article>
      <article className='Headerdiv1'>
        <p>Home</p>
        <p>About us</p>
        <p>Get Involved</p>
        <p>Blog</p>
        <p>Contact us</p>
      </article>
      <article className='Headerdiv'>
        <button className='Headerbutton'>Report a case</button>
      </article>
    </div>
  )
}

export default Header
