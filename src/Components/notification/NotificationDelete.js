import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import styles from "./NotificationList.module.css";
import * as NotificationService from '../../Services/API/notification/NotificationService';
import { Toast, ToastContainer, toast } from "react-toastify";

export function NotificationDelete({ getNotifications, id }) {

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };

    const submit = async () => {
        await getNotifications(id);
        toast.promise(new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        }),
            {
                pending: "Đang xóa....",
                success: "xóa thành công",
                error: "Error received!",
            }
        )
        handleClose();
    }
    return (
        <>
            <button onClick={handleShow}
                className={styles.contentlink}
            >
                Gỡ thông báo
            </button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Thông báo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có Muốn xóa thông báo này ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Không
                    </Button>
                    <Button variant="primary" onClick={submit}>
                        Có
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    )

}