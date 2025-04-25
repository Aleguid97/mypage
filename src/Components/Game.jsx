import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Game() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="play-btn rounded-pill btn" onClick={handleShow}>
        {" "}
        🕹️
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-black fs-1">2048</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-black">
          <script>function startGame() {}</script>
          Adesso Serve la logica per far funzionare il gioco PD
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-aboutme" onClick={handleClose}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Game;
