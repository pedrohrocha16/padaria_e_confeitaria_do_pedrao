import { useState } from 'react';
import {RiMenu5Fill} from 'react-icons/ri'
import Offcanvas from 'react-bootstrap/Offcanvas';

function CanvaBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <RiMenu5Fill onClick={handleShow} className="m-[25px] text-[35px] text-yellow-700"/>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Padaria do Pedrão</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          conteúdo
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CanvaBar;