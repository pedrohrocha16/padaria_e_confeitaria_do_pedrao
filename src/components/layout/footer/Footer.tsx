'use client';

import { Footer } from 'flowbite-react';

function Rodape() {
  return (
    <Footer container>
      <Footer.Copyright by="Padaria e Confeitaria do Pedrão" year={2023} />
      <Footer.LinkGroup>
        <Footer.Link href="#">História</Footer.Link>
        <Footer.Link href="#">Trabalhe Conosco</Footer.Link>
        <Footer.Link href="#">Contato</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
export default Rodape