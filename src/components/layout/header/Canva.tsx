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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CanvaBar;