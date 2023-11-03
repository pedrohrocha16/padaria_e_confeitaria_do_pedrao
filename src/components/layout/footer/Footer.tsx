'use client';

import { Footer } from 'flowbite-react';

function Rodape() {
  return (
    <Footer container className='w-[100%] flex flex-col justify-center items-center'>
      <Footer.Copyright by="Padaria e Confeitaria do Pedrão" year={2023} />
    </Footer>
  );
}
export default Rodape