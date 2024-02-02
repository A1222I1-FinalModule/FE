import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as PaymentService from "../../Services/API/payment/PaymentService"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Assets/Styles/discount-select-modal.css'

function DiscountSelectModal(props) {
    const [show, setShow] = useState(false);
    const [discounts, setDiscounts] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (show === true) {
            getDiscounts();
        }
    }, [show]);
    const getDiscounts = async () => {
        setLoading(true);
        let temp = await PaymentService.getDiscounts(props.bill.customerCode, props.bill.total);
        if (temp.status == 200) {
            setDiscounts(temp.data);
        } else {
            if (temp.status == 400) {
                toast.error('Khách hàng không tồn tại!');
            }
        }
        setLoading(false);
    };
    return (
        <>
            <Button variant="primary" className='normal-txt-payment' onClick={handleShow}>
                Chọn mã giảm giá
            </Button>
            <Modal show={show} onHide={handleClose} className='normal-txt-payment' backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Mã giảm giá có thể chọn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='scroll-div list-container-payment'>
                        {loading ? (<div className="text-center">
                            <div className="spinner-border" style={{ width: "200px", height: "200px", color: "green" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>) : (discounts.length > 0 ?
                            <div className="list-group">
                                {discounts.map((item, index) => (
                                    <div key={item.discountCode} className="list-group-item list-group-item-action">
                                        <div className="row">
                                            <p>{item.name}</p>
                                        </div>
                                        <div className="row">
                                            <p className="col-auto text-success">Điểm: +{item.rewardPoint}</p>
                                            <p className="col-auto text-primary">Giảm: {item.sale.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                            <div className="row">
                                                <div className="col-auto">
                                                    <button onClick={() => {
                                                        props.handleSubmit(item)
                                                        handleClose();
                                                    }} className='btn btn-primary'>Chọn</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            : (
                                <h3 className='text-danger'>Không có mã giảm giá khả dụng!</h3>
                            ))}
                    </div>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default DiscountSelectModal;