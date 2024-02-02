import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import * as service from "../../../Services/API/NewsService";
import styles from './Detail.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export function NewsDetail({ showModal, setShowModal, newsId, setNewsId }) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        getSelectedNews();
    }, []);

    const getSelectedNews = async () => {
        const data = await service.getNewsById(newsId);
        console.log("detail: ", data);
        setNews(data);
    };

    return (
        <>
            <Modal show={showModal} onHide={() => {
                setShowModal(false);
                setNewsId(0);
                }}
                dialogClassName={cx("custom-modal-size")}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{news.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={cx("image")}>
                        <img src={`${news.image}`} />
                    </div>
                    <div className={cx("title")}>{news.title}</div>
                    <div className={cx("content")}>{news.content}</div>
                    <div className={cx("creator")}>{news.creator}</div>
                </Modal.Body>
            </Modal>
        </>
    );
};