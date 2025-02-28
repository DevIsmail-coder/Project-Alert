import React, { useState } from 'react'
import './Header.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [dropDown, setDropDown] = useState(false)

  const handleShowNav = () => {
    setDropDown(!dropDown)
  }

  const getActivediv = (path) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <div className='Headerbody'>
      <article className='Headerdivlogo'>
        <h3 className='Headerdivh3'>Project Alert</h3>
      </article>
      <article className='Headerdiv1'>
        <div className={`Headerdiv1span ${getActivediv("/")}`} onClick={() => navigate("/")}>
          <p className='Headerline'  >Home</p>
        </div>
        <div className={`Headerdiv1span ${getActivediv("/aboutus")}`} onClick={() => navigate("/aboutus")}>
          <p className='Headerline'>About us</p>
        </div>
        <div className={`Headerdiv1span ${getActivediv("/getinvolved")}`} onClick={() => navigate("/getinvolved")}>
          <p className='Headerline'>Get Involved</p>
        </div>
        <div className={`Headerdiv1span ${getActivediv("/blog")}`} onClick={() => navigate("/blog")}>
          <p className='Headerline'>Blog</p>
        </div>
        <div className={`Headerdiv1span ${getActivediv("/contactus")}`} onClick={() => navigate("/contactus")}>
          <p className='Headerline'>Contact us</p>
        </div>
      </article>
      <article className='Headerdiv'>
        <button onClick={() => navigate("/contactus")} className='Headerbutton'>Report a case</button>
      </article>
      {
        dropDown ? <LiaTimesSolid className='Burgermenuicon' onClick={() => handleShowNav()}  /> : <RxHamburgerMenu className='Burgermenuicon' onClick={() => handleShowNav()} />
      }

      {
        dropDown &&
        <div className='Headerdiv1drop'>
          {/* <RxHamburgerMenu className='Burgermenuicon' onClick={() => handleShowNav()} /> */}
          <article className='headerdropmobile'>
            <div className={`Headerdiv1span ${getActivediv("/")}`} onClick={() => navigate("/")}>
              <p className='Headerline'  >Home</p>
            </div>
            <div className={`Headerdiv1span ${getActivediv("/aboutus")}`} onClick={() => navigate("/aboutus")}>
              <p className='Headerline'>About us</p>
  
            </div>
            <div className={`Headerdiv1span ${getActivediv("/getinvolved")}`} onClick={() => navigate("/getinvolved")}>
              <p className='Headerline'>Get Involved</p>
  
            </div>
            <div className={`Headerdiv1span ${getActivediv("/blog")}`} onClick={() => navigate("/blog")}>
              <p className='Headerline'>Blog</p>
  
            </div>
            <div className={`Headerdiv1span ${getActivediv("/contactus")}`} onClick={() => navigate("/contactus")}>
              <p className='Headerline'>Contact us</p>
  
            </div>
          </article>
          <article className='headerdropmobilebutton'>
            <button onClick={() => navigate("/contactus")} className='Headerbutton'>Report a case</button>
          </article>
        </div>
      }
    </div>
  )
}

export default Header
