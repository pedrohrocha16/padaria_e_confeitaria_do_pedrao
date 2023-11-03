import React from 'react'
import SlideImg from '../products/Carousel'

type Props = {}

function MainContent({ }: Props) {
   return (
      <div className='flex flex-col justify-center items-center w-[100%]'>
         <div className='flex justify-center items-center w-[100%] bg-gradient-to-r from-orange-300 to-red-300 min-h-[300px]' >
            <div className='block rounded-[15px] w-[80%] md:w-[60%] lg:w-[40%] xl:w-[38%] 2xl:w-[30%] '>
               <SlideImg />
            </div>
         </div>
         <div>
            <h2>História</h2>
         </div>
         <div>
            <h2>Localização</h2>
         </div>
         <div>
            <h2>Trabalhe conosco</h2>
         </div>
      </div>
   )
}

export default MainContent