import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div className='Filterbody'> 
    <div className='Filtermain'>
    <article className='Filtercontainer1'>
         <span className='Filtermainwrap' >
         <h3 className='Filterheader'>Home</h3>
            <span className='Filtercontainerlist'>
                <p>What we do</p>
                <p>Research and reports</p>
                <p>Stories and features</p>
                <p>Where we work</p>
                <p>Press Centre</p>
                <p>Take action</p>
            </span>
         </span>
         <span className='Filtermainwrap' >
         <h3 className='Filterheader'>Get Involved</h3>
            <span className='Filtercontainerlist'>
                <p>Report a case</p>
                <p>Volunteer</p>
                <p>Donate</p>
                <p>Intern</p>
            </span>
         </span>
         <span className='Filtermainwrap' >
         <h3 className='Filterheader'>Company</h3>
            <span className='Filtercontainerlist'>
                <p>About us</p>
                <p>Blog</p>
                <p>Board of Trustes</p>
            </span>
         </span>
    </article>
    <article className='Filtercontainer2'>
        <button className='filterbutton'>Donate now</button>
        <span>
            
        </span>
    </article>
    </div>
    <p></p>
    </div>
  )
}

export default Filter
