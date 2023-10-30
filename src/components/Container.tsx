import React from 'react'

function Container({ children }: any) {
   return (
      <div>
         <h1>Header</h1>
         <div className='flex justify-center w-full items-center'>
            {children}
         </div>
         <h2>Footer</h2>
      </div>
   )
}

export default Container