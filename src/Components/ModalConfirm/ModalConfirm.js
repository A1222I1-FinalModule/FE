import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

 function Example({handleDelete,id}) {
  // mình có thể thay vì dùng cái handleDelete,id thì mình dùng props rồi props. là ra được 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submit =()=>{
    handleDelete(id);
    handleClose();
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Xóa
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Thông Báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn xóa </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Thoát
          </Button>
          <Button variant="danger" onClick={submit}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;