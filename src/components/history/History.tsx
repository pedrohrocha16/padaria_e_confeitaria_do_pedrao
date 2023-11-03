import { titleFontFamily } from '@/styles/fontes/Fontes'
import { FcHighPriority } from 'react-icons/fc'
import Image from 'next/image'
import React from 'react'

type Props = {}

const History = (props: Props) => {
   return (
      <div className='flex flex-col items-start justify-center w-[100%] min-h-[200px] p-10 sm:p-[5vw] md:p-[8%] lg:p-[2%] sm:m-4'>
         <div className='flex flex-row gap-2 mb-[25px] sm:ml-[10%] lg:ml-[15%]'>
            <div className='flex flex-col items-center justify-center w-[100px] border-dashed p-2 border-1 text-center border-yellow-700 max-h-[180px]'>
               <Image src={'/padeiro.png'} width={80} height={80} alt='padeiro' />
               <h5 className={titleFontFamily.className}>Nossa História</h5>
            </div>
            <div className='flex flex-col p-2 text-left w-[70%] ml-2'>
               <p>A <strong>Padaria e Confeitaria do Pedrão</strong> nasceu no ano de 2020, atuando na industrialização de produtos congelados voltados para o segmento de panificação. Desde então, a empresa vem trilhando um caminho de evolução e de melhoria contínua. Hoje, a padaria produz mais de 100 produtos, entre pães, roscas, bolos e salgados congelados. Os produtos são transportados em frota nova e em veículos refrigerados, garantindo a máxima qualidade.<br></br><br></br></p>
               <div className=' flex flex-row'>
                  <FcHighPriority className="flex items-center justify-center text-[25px] mr-2" />
                  <p><strong>Estamos fazendo delivery, basta fazer o pedido pelo site ou pelo WhatsApp. Entregas: 08:00hrs - 18:00hrs segunda à sexta.</strong></p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default History