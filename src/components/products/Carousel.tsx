
'use client';

import { Carousel } from 'flowbite-react';

function SlideImg() {
   return (
      <div className="flex h-56 grid-cols-2 gap-4 sm:h-64 xl:h-[270px] 2xl:h-[280px]">
         <Carousel>
            <img src={'/products/sobremesa.jpg'} alt="..." className='h-[280px]' />
            <img src={'/products/biscoitos.jpg'} alt="..." className='h-[280px]' />
            <img src={'/products/bolo.jpg'} alt="..." className='h-[280px]' />
            <img src={'/products/bolos_confeitados.jpg'} alt="..." className='h-[280px]' />
            <img src={'/products/capuccino.jpg'} alt="..." className='h-[280px]' />
            <img src={'/products/chef.jpg'} alt="..." className='h-[280px]' />
            <img src={'/products/cupcake.jpg'} alt="..." className='h-[280px]' />
            <img src={'/products/cupcakes.jpg'} alt="..." className='h-[280px]' />
            <img src={'/products/geral.jpg'} alt="..." className='h-[280px]' />
            <img src={'/products/paes.jpg'} alt="..." className='h-[280px]' />
            <img src={'/products/roscas.jpg'} alt="..." className='h-[280px]' />
            <img src={'/products/salgados.jpg'} alt="..." className='h-[280px]' />
         </Carousel>
      </div>
   );
}

export default SlideImg