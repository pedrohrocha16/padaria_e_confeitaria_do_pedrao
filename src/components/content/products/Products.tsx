import Image from 'next/image'
import React from 'react'
type Props = {}
''
const Products = (props: Props) => {
  return (
    <div className="gridProducts">
      <Image className='img_products' src={"/products/biscoitos.jpg"} width={350} height={350} alt='produtos' />
      <Image className='img_products' src={"/products/bolo.jpg"} width={350} height={350} alt='produtos' />
      <Image className='img_products' src={"/products/cupcakes.jpg"} width={350} height={350} alt='produtos' />
      <Image className='img_products' src={"/products/paes.jpg"} width={350} height={350} alt='produtos' />
      <Image className='img_products' src={"/products/roscas.jpg"} width={350} height={350} alt='produtos' />
      <Image className='img_products' src={"/products/salgados.jpg"} width={350} height={350} alt='produtos' />
    </div>
  )
}

export default Products