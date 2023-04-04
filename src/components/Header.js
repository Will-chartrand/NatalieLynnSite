import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import NavBarOption from './navbar/NavBarOption'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

function Header (props) {
  return (
    // <motion.nav className='bg-[#181d1a] border-[#36453c] px-4 sm:px-6 py-2 rounded-2xl rounded-t-none dark:bg-[#181d1a] border-b-[1px] border-x-[1px]' whileHover={{borderRadius: "0rem", transition: {duration: 0.2}}}>
    // <motion.nav id='navbar' className='border-[#36453c] px-4 sm:px-6 py-10 rounded-2xl rounded-t-none border-b-[1px] border-x-[1px]' whileHover={{borderRadius: "0rem", transition: {duration: 0.2}}}>
    <motion.nav id='navbar' className='border-[#36453c] px-4 sm:px-6 py-4 rounded-2xl rounded-t-none border-b-[1px] border-x-[1px]' whileHover={{borderRadius: "0rem", transition: {duration: 0.2}}}>

      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        {/* Logo / Home button */}
        <a href='/' className='flex items-center'>
          <img
            src='pine.png'
            className='h-9 mr-2 sm:h-10'
            alt='Car Image'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Natalie Lynn
          </span>
        </a>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          {/* Navbar Options */}
          <ul className='flex flex-col p-4 mt-4 border border-[#36453c] rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium dark:bg-stone-[#181d1a] dark:border-[#36453c]'>
            <NavBarOption title="About" url='#about'/>
            <NavBarOption title="Skills" url='#skills'/>
            <NavBarOption title="Pricing" url='#pricing'/>
            <NavBarOption title="Contact" url='#contact'/>
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default Header
