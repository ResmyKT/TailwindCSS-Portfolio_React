import React from 'react'
import tailwindConfig from './tailwind.config'


function Header() {
  return (
    <div>
   
    <header class="bg-[#1e1e1e] text-white">
        <section class="wrapper flex justify-between items-center h-[90px]">
            <h1 className='flex mr-5'><img src="images/logo.png" alt="logo" width="90px"/>
            <p className='mt-8 font-bold text-[30px]'>RESMY KT</p></h1>
            <ul class="flex justify-end items-center">
                <li class="mr-10"><a class="text-[16px] font-semibold" href="#">Home</a></li>
                <li class="mr-10"><a class="text-[16px] font-semibold" href="#">Projects</a></li>
                <li class="mr-10"><a class="text-[16px] font-semibold" href="#">Contact</a></li>
            </ul>
        </section>
    </header>
    </div>
  )
}

export default Header
