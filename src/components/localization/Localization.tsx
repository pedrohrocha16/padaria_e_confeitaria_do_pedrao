import React from 'react'
import { titleFontFamily } from '@/styles/fontes/Fontes'

type Props = {}

function Localization({ }: Props) {
   return (
      <div className='w-[100%] p-5'>
         <div className='border-dashed p-5 border-1 text-center border-yellow-700'>
            <div className='mb-5'>
               <h5 className={titleFontFamily.className}>Localização</h5>
            </div>
            <div className='w-[100%] flex items-center justify-center'>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32342863.742458947!2d-82.24057443107905!3d8.292499602053303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590c7d05a6fd%3A0xf41c612405d92aa0!2sMagnolia%20Bakery%20-%20Central%20Park%20South!5e0!3m2!1spt-BR!2sbr!4v1699019020401!5m2!1spt-BR!2sbr" width="100" height="280" className='w-[90%]'></iframe>
            </div>
         </div>
      </div>
   )
}

export default Localization