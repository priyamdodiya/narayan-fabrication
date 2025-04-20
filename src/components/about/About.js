import React from 'react';
import Aboutimg from './Aboutimg';
import Aboutfabworld from './Aboutfabworld';
import "./About.css";
import Whorwe from './Whorwe';
import WhatWeDo from './Whatwedo';
import Behind from './Behind';
import InquiryForm from "./InquiryForm"
import Contact from '../contact/Contact';

const About = () => {
  return (
    <div className='apages'>
      <Aboutimg />
      <Aboutfabworld />
      <Whorwe/>
      <WhatWeDo/>
      <Behind/>
      <InquiryForm/>
      <Contact/>
    </div>
  );
};

export default About;
