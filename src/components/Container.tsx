import React from 'react'
import NavBar from './layout/header/NavBar'
import Footer from './layout/footer/Footer'

function Container({ children }: any) {
   return (
      <div>
         <NavBar />
         <div className="flex justify-center w-full items-center">
            {children}
         </div>
         <Footer />
      </div>
   )
}

export default Container