import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPaginate from 'react-paginate';
import "../Assets/Styles/customer-search.css"
import * as PaymentService from "../Services/payment/PaymentService"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CustomerSearchModal(props) {
    let selectedCode = "";
    const [show, setShow] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function activeTableRow(event) {
        let rows = document.getElementsByClassName("tbl-row");
        for (let i = 0; i < rows.length; i++) {
            rows[i].className = rows[i].className.replace(" table-active", "");
        }
        event.currentTarget.className += " table-active";
    }

    const handleChange = (code) => {
        selectedCode = code;
    }

    useEffect(() => {
        if (show == true) {
            getAllCustomer();
        }
    }, [show]);

    const getAllCustomer = async () => {
        let temp = await PaymentService.getAll();
        setCustomers(temp.data);
    };

    const getSearchCustomer = async () => {
        let temp = await PaymentService.searchCustomer(searchStr);
        if (temp.status != 204) {
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
        }
    };

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item, index) => (
                        <tr key={item.id} className="tbl-row" onClick={(event) => {
                            handleChange(item.id)
                            activeTableRow(event);
                        }}>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
            </>
        );
    }

    function PaginatedItems({ itemsPerPage }) {
        const [itemOffset, setItemOffset] = useState(0);
        console.log(customers)

        const endOffset = itemOffset + itemsPerPage;
        const currentItems = customers.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(customers.length / itemsPerPage);
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % customers.length;
            setItemOffset(newOffset);
        };

        return (
            <>
                <table align="center" id="custom-table" className="table table-hover table-bordered normal-txt-payment">
                    <thead>
                        <tr className="table-dark">
                            <th>STT</th>
                            <th>Mã khách hàng</th>
                            <th>Tên khách hàng</th>
                            <th>Số điện thoại</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Items currentItems={currentItems} />
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ReactPaginate
                        breakLabel="..."
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
                        className="pagination"
                        pageClassName="page-item"
                        pageLinkClassName="page-link normal-txt-payment"
                        activeClassName="active"
                    />
                </nav>
            </>
        );
    }

    return (
        <>
            <Button className='normal-txt-payment' variant="success" onClick={handleShow}>
                Tra cứu khách hàng
            </Button>
            <Modal size='xl' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tra cứu khách hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            <div className="input-group mb-3">
                                <input type="text" onChange={(e) => setSearchStr(e.target.value)} className="form-control p-4 normal-txt-payment" value={searchStr} placeholder="Nhập mã KH, tên KH hoặc sdt" />
                            </div>
                            <div className='row'>
                                <div className="input-group-append col-auto">
                                    <button className="btn btn-success normal-txt-payment" onClick={() => {
                                        getSearchCustomer();
                                    }}>Tìm kiếm</button>
                                </div>
                                <div className='input-group-append col-auto'>
                                    <button className="btn btn-primary normal-txt-payment" onClick={() => {
                                        props.handleSubmit(selectedCode)
                                        handleClose();
                                    }
                                    }>Chọn
                                    </button>
                                </div>
                            </div>
                        </div>
                        <PaginatedItems itemsPerPage={4} />
                    </div>
                </Modal.Body>
            </Modal>
            <ToastContainer />
        </>
    );
}

export default CustomerSearchModal;