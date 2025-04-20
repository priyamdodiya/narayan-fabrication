import React from 'react'
import "./Contactus.css"
import Getintouch from './getintouch/Getintouch'
import Contact from '../contact/Contact'
const Contactus = () => {
  return (
    <div>
      <div className='contactus'>
      <h1>Contact Us</h1>
      <ul>
        <li>Home</li>
        <li>{'>'}</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <Getintouch/>
    <Contact/>
    </div>
  )
}

export default Contactus