import React from 'react'
import NavBar from './layout/header/NavBar'

function Container({ children }: any) {
   return (
      <div className='m-0 p-0'>
         <div className='w-[100%] bg-yellow-100'>
            <NavBar />
         </div>
         <div className="flex justify-center w-full items-center">
            {children}
         </div>
      </div>

   )
}

export default Container