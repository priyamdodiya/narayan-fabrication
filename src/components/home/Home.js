import React from 'react'
import "./Home.css"
import Bgimages from './bgimages/Bgimages'
import ServicesCard from './services-card/ServicesCard'
import Callnow from './callnow/Callnow'
import Aboutus from './aboutus/Aboutus'
import Testimonials from './testimonials/Testimonials'
import Contact from '../contact/Contact'
const Home = () => {
  return (
    <div >
     <Bgimages/>
     <ServicesCard/>
     <Callnow/>
     <Aboutus/>
     <Testimonials/>
     <Contact/>
    </div>
  )
}
export default Home;