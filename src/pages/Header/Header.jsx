import React from 'react'
import './Header.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
const location = useLocation()
  const navigate = useNavigate()

  const getActivediv = (path) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <div className='Headerbody'>
      <article className='Headerdiv'>
        <h3 className='Headerdivh3'>Project Alert</h3>
      </article>
      <article  className='Headerdiv1'>
        <div className={`Headerdiv1span ${getActivediv("/")}`} onClick={() => navigate("/")}>
          <p className='Headerline'  >Home</p>
          {/* <span className='Headerline'></span> */}
        </div>
        <div className={`Headerdiv1span ${getActivediv("/aboutus")}`} onClick={() => navigate("/aboutus")}>
          <p className='Headerline'>About us</p>
          {/* <span></span> */}
          </div>
        <div className={`Headerdiv1span ${getActivediv("/getinvolved")}`} onClick={() => navigate("/getinvolved")}>
          <p className='Headerline'>Get Involved</p>
          {/* <span></span> */}
        </div>
        <div className={`Headerdiv1span ${getActivediv("/blog")}`} onClick={() => navigate("/blog")}>
          <p className='Headerline'>Blog</p>
          {/* <span></span> */}
        </div>
        <div className={`Headerdiv1span ${getActivediv("/contactus")}`} onClick={() => navigate("/contactus")}>
          <p className='Headerline'>Contact us</p>
          {/* <span></span> */}
        </div>
      </article>
      <article className='Headerdiv'>
        <button onClick={()=>navigate("/contactus")} className='Headerbutton'>Report a case</button>
      </article>
    </div>
  )
}

export default Header
