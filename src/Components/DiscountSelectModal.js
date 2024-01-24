import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as PaymentService from "../Services/payment/PaymentService"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Styles/discount-select-modal.css'

function DiscounrSelectModal(props) {
    const [show, setShow] = useState(false);
    const [discounts, setDiscounts] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (show === true) {
            getDiscounts();
        }
    }, [show]);
    const getDiscounts = async () => {
        let temp = await PaymentService.getDiscounts(props.bill.customerCode, props.bill.total);
        if (temp.status == 200) {
            setDiscounts(temp.data);
        } else {
            if (temp.status == 400) {
                toast.error('Khách hàng không tồn tại!');
            }
        }
    };
    return (
        <>
            <Button variant="primary" className='normal-txt-payment' onClick={handleShow}>
                Chọn mã giảm giá
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mã giảm giá có thể chọn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='scroll-div list-container'>
                        {discounts.length > 0 ?
                            <div className="list-group">
                                {discounts.map((item, index) => (
                                    <div key={item.discountCode} className="list-group-item list-group-item-action">
                                        <div className="row">
                                            <p>{item.name}</p>
                                        </div>
                                        <div className="row">
                                            <p className="col-auto text-success">Điểm: +{item.rewardPoint}</p>
                                            <p className="col-auto text-primary">Giảm: đ{item.sale}</p>
                                            <div className="row">
                                                <div className="col-auto">
                                                    <button onClick={() => {
                                                        props.handleSubmit(item)
                                                        handleClose();
                                                    }
                                                    }>Chọn</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            : (
                                <h3 className='text-danger'>Không có mã giảm giá khả dụng!</h3>
                            )}
                    </div>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default DiscounrSelectModal;