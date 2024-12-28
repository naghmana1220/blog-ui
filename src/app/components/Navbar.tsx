import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='text-gray-400 body-font shadow-lg bg-slate-950'>
    <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
    <div className='font-serif text-4xl lg:pt-2 text-slate-300'>
    My<span className='text-cyan-500'>Blog</span>
 </div>

 <div className='flex-1 text-black'>
 
      <nav className='md:ml-auto flex flex-wrap items-center text-cyan-500 justify-center lg:pl-[990px] '>

<Link href={"/"} className='mr-5 hover:text-cyan-300 transition-colors duration-300 transform hover:scale-105'>
 
 Home
 </Link>

 <Link href={"#About"} className='mr-5 hover:text-cyan-300 transition-colors duration-300 transform hover:scale-105'>
  
 About 
 </Link>


 <Link href={"#Blog"} className='mr-5 hover:text-cyan-300 transition-colors duration-300 transform hover:scale-105'>
 
 Blog 
 </Link>


 <Link href={"#Contact"} className='mr-5 hover:text-cyan-300 transition-colors duration-300 transform hover:scale-105'>
  
 Contact 
 </Link>





      </nav>
 </div>

    </div>
    </header>
  )
}
export default Navbar
