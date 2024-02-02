import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPaginate from 'react-paginate';
import "../../Assets/Styles/customer-search.css"
import * as PaymentService from "../../Services/API/payment/PaymentService"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerAddModal from './CustomerAddModal';

function CustomerSearchModal(props) {
    let timer;
    const [searchStr, setSearchStr] = useState("");
    const [errSearch, setErrSearch] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState([]);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
        setErrSearch("");
        setSearchStr("");
    };
    const debounce = (func, delay) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, delay);
    };

    useEffect(() => {
        if (show === true) {
            getAllCustomer();
        }
    }, [show]);

    const getAllCustomer = async () => {
        setLoading(true);
        let temp = await PaymentService.getAll();
        setCustomers(temp.data);
        setLoading(false);
    };

    const getSearchCustomer = async () => {
        setErrSearch("");
        if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/.test(searchStr)) {
            setErrSearch("Từ khóa tìm kiếm không được chứa kí tự đặc biệt.");
        } else {
            setLoading(true);
            let temp = await PaymentService.searchCustomer(searchStr.trim());
            if (temp.status !== 204) {
                setCustomers(temp.data);
            } else {
                toast.error('Không tìm thấy khách hàng!', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            };
            setLoading(false);
        }
    };

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item, index) => (
                        <tr key={item.id} className={"tbl-row table-light" + (item.id == props.chooseCode ? " table-active" : "")}>
                            <td style={{ width: "5%" }}>{index + 1}</td>
                            <td style={{ width: "25%" }}>{item.id}</td>
                            <td style={{ width: "40%" }}>{item.name}</td>
                            <td style={{ width: "30%" }}>{item.phone}</td>
                            <td><button className="btn btn-primary normal-txt-payment" onClick={() => {
                                props.handleSubmit(item.id, item.name);
                                handleClose();
                            }}>Chọn</button></td>
                        </tr>
                    ))}
            </>
        );
    };

    function PaginatedItems({ itemsPerPage }) {
        const [itemOffset, setItemOffset] = useState(0);

        const endOffset = itemOffset + itemsPerPage;
        const currentItems = customers.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(customers.length / itemsPerPage);
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % customers.length;
            setItemOffset(newOffset);
        };

        return (
            <>
                <table align="center" id="custom-table-customer-search" className="table mt-4 table-bordered normal-txt-payment">
                    <thead>
                        <tr className="table-dark text-center">
                            <th>STT</th>
                            <th>Mã khách hàng</th>
                            <th>Tên khách hàng</th>
                            <th>Số điện thoại</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Items currentItems={currentItems} />
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ReactPaginate
                        breakLabel="..."
                        breakClassName='page-item'
                        breakLinkClassName='page-link normal-txt-payment'
                        nextLabel="&raquo;"
                        nextClassName="page-item"
                        nextLinkClassName="page-link normal-txt-payment"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="&laquo;"
                        previousClassName="page-item"
                        previousLinkClassName="page-link normal-txt-payment"
                        renderOnZeroPageCount={null}
                        className="pagination justify-content-center"
                        pageClassName="page-item"
                        pageLinkClassName="page-link normal-txt-payment"
                        activeClassName="active"
                    />
                </nav>
            </>
        );
    };

    return (
        <>
            <Button className='normal-txt-payment' variant="success" onClick={handleShow}>
                Tra cứu khách hàng
            </Button>
            <Modal size='xl' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Tra cứu khách hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            <div className="input-group mb-3">
                                <input type="text" onChange={(e) => setSearchStr(e.target.value)} className="form-control p-4 normal-txt-payment" placeholder="Nhập mã KH, tên KH hoặc sdt" />
                            </div>
                            <div className='row'>
                                <p style={{ color: "red", fontSize: "15px", lineHeight: "15px" }}>{errSearch}</p>
                            </div>
                            <div className='row'>
                                <div className="input-group-append col-auto">
                                    <button className="btn btn-success normal-txt-payment m-3" onClick={() => {
                                        debounce(getSearchCustomer, 800);
                                    }}>Tìm kiếm</button>
                                    <CustomerAddModal getList={getAllCustomer} />
                                </div>
                            </div>
                        </div>
                        {loading ? (<div className="text-center">
                            <div className="spinner-border" style={{ width: "200px", height: "200px", color: "green" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>) : <PaginatedItems itemsPerPage={4} />}
                    </div>
                </Modal.Body>
            </Modal>
            <ToastContainer />
        </>
    );
}

export default CustomerSearchModal;