import React from 'react'
import Products from './products/Products'

type Props = {}

function MainContent({ }: Props) {
   return (
      <div className='flex flex-col justify-center items-center w-[100%]'>

         <div className='flex justify-center items-center w-[100%] bg-gradient-to-r from-orange-300 to-red-300'>
            <Products />
         </div>
      </div>
   )
}

export default MainContent