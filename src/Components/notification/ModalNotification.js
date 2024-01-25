import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import * as NotificationService from '../../Services/API/notification/NotificationService'
import { useParams } from "react-router-dom";

export function ModalNotification({ showModal, setShowModal, notificationId, setNotificationId }) {
    const [notification, setNotification] = useState();
    useEffect(() => {
        findById();
    }, []);
    const findById = async () => {
        let data = await NotificationService.findByid(notificationId);
        setNotification(data);
    }

    if (!notification) return null;

    return (
        <Modal show={showModal} onHide={() => {
            setShowModal(false);
            setNotificationId(0);
        }}>
            <Modal.Body>
                <div>
                    {notification.content}
                </div>
            </Modal.Body>
        </Modal>
    )


}