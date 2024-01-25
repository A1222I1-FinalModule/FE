import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NotFound({ show, handleClose }) {
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông Báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Không tìm thấy dữ liệu</Modal.Body>
                <Modal.Footer>
                    <Button class="btn btn-success" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NotFound;
