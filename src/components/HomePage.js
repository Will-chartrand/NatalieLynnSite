import { motion } from "framer-motion"
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <>
      <div id='homePage' className="h-screen">
        <video id="homePageVideo" autoPlay muted loop className="2xl:w-full h-2xl:h-auto h-full object-cover w-full absolute -z-10">
          <source src="vanLife.mp4" type="video/mp4" />
        </video>
        <Header/>

          <div id='homeMain' className="flex items-center">
              <div className="items-center justify-center text-center mx-auto mb-32 font-amatic text-[#c1bcb4] md:text-[5vw] text-[10vw]">
                Natalie Lynn Videography
              </div>
          </div>
          <a href='#about'>
              <motion.div className="p-10" whileHover={{backgroundColor: "rgba(0,0,0,0.5)", transition: {duration: 0.2}}}>
                <div className="arrow" ></div>
              </motion.div>
          </a>
      </div>
    </>
  )
}
