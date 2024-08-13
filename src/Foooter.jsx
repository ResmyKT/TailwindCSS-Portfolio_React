import React from 'react'
import tailwindConfig from '../tailwind.config'



function Foooter() {
  return (
    <div>
      <footer class="py-20 bg-[#1e1e1e] text-white">
    <section class="wrapper">
        <h1 class="text-[32px] font-semibold mb-10 ml-10 text-center">Let's Connect:</h1>
        
        <div class="flex justify-center items-center my-10">
            <img src="./images/Email Icon.png" alt="" class="w-[16px] mr-1 ml-10"/>
          <a href=""> <p class="text-[16px] font-normal opacity-70">resmykt333@gmail.com</p></a> 
        </div>
        <div class="flex justify-center items-center my-10">
        <img src="./images/instagram (1).png" alt="" class="w-[16px] mr-1 ml-10"/>
          <a href="https://www.instagram.com/resmymidhun/"> <p class="text-[16px] font-normal opacity-70">resmymidhun</p></a> 
        </div>
        <div class="flex justify-center items-center my-10">
        <img src="./images/youtube.png" alt="" class="w-[16px] mr-1 ml-10"/>
          <a href="https://www.youtube.com/@resmykt4735/"> <p class="text-[16px] font-normal opacity-70">@resmykt4735</p></a> 
        </div>
        <div class="flex justify-center items-center my-10">
            <img src="./images/Email Icon.png" alt="" class="w-[16px] mr-1 ml-10"/>
          <a href="https://github.com/ResmyKT"> <p class="text-[16px] font-normal opacity-70">ResmyKT</p></a> 
        </div>
        <div class="flex justify-center items-center my-10">
        <i class="fa-brands fa-linkedin w-[16px] mr-1 ml-10"></i>
          <a href="https://www.linkedin.com/in/resmy-kt-b289a8309/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BCqCYGe5UR1e6T28HOU0m%2Fg%3D%3D"> <p class="text-[16px] font-normal opacity-70">ResmyKT</p></a> 
        </div>
        
    </section>
</footer>

    </div>
  )
}

export default Foooter

