import React from 'react'
import SlideImg from '../products/Carousel'
import History from '../history/History'
import Localization from '../localization/Localization'
import Order from '../order/Order'

type Props = {}

function MainContent({ }: Props) {
   return (
      <div className='flex flex-col justify-center items-center w-[100%]'>
         <div className='h-[350px] flex justify-center items-center w-[100%] bg-gradient-to-r from-orange-200 to-red-200 min-h-[300px]' >
            <div className='block rounded-[15px] w-[80%] md:w-[60%] lg:w-[40%] xl:w-[38%] 2xl:w-[30%] '>
               <SlideImg />
            </div>
         </div>
         <div className='flex justify-center items-center w-[100%] bg-gray-200 min-h-[300px]'>
            <History />
         </div>
         <div>
            <Order />
         </div>
         <div className='flex justify-center items-center w-[100%] bg-gradient-to-r from-orange-200 to-red-200 min-h-[300px]'>
            <Localization />
         </div>
         <div>
            <h2>Trabalhe conosco</h2>
         </div>
      </div>
   )
}

export default MainContent