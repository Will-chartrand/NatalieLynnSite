import { Inter } from 'next/font/google';

import HomePage from '@/components/HomePage';
import About from './main/About';
import Contact from './main/Contact';
import Pricing from './main/Pricing';
import Videography from './main/Videography';

import { useAnimationControls } from "framer-motion"
import React, { useEffect } from "react";

function Main(){
  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({
      borderRadius: "0rem",
    })
    controls.start({
      borderRadius: "1rem",
      transition: {duration: 0.2},
    });
  }, [])

  return (
    <div className='block snap-y'>
      <HomePage/>
      <About controls={controls} />
      <Videography controls={controls} />
      <Pricing controls={controls} />
      <Contact controls={controls} />
    </div>
  )
}

export default Main;
