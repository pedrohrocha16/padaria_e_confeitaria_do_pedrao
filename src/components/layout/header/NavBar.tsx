import React from 'react'
import CanvaBar from './Canva'
import Image from 'next/image'
import { titleFontFamily, subFontFamily } from '@/styles/fontes/Fontes'

type Props = {}

function NavBar({ }: Props) {
  return (
    <div className='p-[10px]'>
      <div>
        <CanvaBar />
      </div>
      <div className='flex flex-col justify-center items-center h-[230px]'>
        <Image src="/logo.png" width={200} height={200} alt='logo' className='mb-[20px]' />
        <h1 className={titleFontFamily.className}>Padaria do Pedrão</h1>
        <p className={subFontFamily.className}>feito com amor e dedicação...</p>
      </div>
    </div>
  )
}

export default NavBar