import { Modal } from "react-bootstrap";
import { CartX } from "react-bootstrap-icons";
import styles from './SmallList.module.css';
import classNames from 'classnames/bind';
import { NewsDetail } from "../../../Pages/News/Detail/Detail";
import { useState } from "react";
const cx = classNames.bind(styles);

export function SmallList({ showModal, setShowModal, selectedListByTag, setSelectedListByTag }) {
    const [selectedNewsId, setSelectedNewsId] = useState(0);
    const [showDetailModal, setShowDetailModal] = useState(false);

    return (
        <>
            <Modal show={showModal} onHide={() => {
                setShowModal(false);
                setSelectedListByTag([]);
            }}
                dialogClassName={cx("custom-modal-size")}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Danh Sách</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={cx("my-table")}>
                        <table>
                            <tr>
                                <th></th>
                                <th>Tiêu đề</th>
                                <th>Tác giả</th>
                                <th>Xem thêm</th>
                            </tr>
                            {
                                selectedListByTag.slice().reverse().map((item) => (
                                    <tr key={item.id}>
                                        <td><img src={item.image} /></td>
                                        <td>{item.title}</td>
                                        <td>{item.creator}</td>
                                        <td>
                                            <button
                                                className={cx("more-button")}
                                                onClick={() => {
                                                    setShowDetailModal(true);
                                                    setSelectedNewsId(item.id);
                                                    setShowModal(false);
                                                }}>
                                                Đọc
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </Modal.Body>
            </Modal>
            {selectedNewsId != 0 && <NewsDetail showModal={showDetailModal} setShowModal={setShowDetailModal} newsId={selectedNewsId} setNewsId={setSelectedNewsId} />}
        </>
    );
}