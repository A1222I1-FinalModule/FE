import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from 'google-fonts';
import styled from '../Customer/listCustomer.module.css';
import { useEffect, useState } from 'react';
import * as customers from '../../Services/API/Customer/customer';
import Example2 from '../ModalConfirm/ModalConfirmCustomer';
import { toast } from 'react-hot-toast';
import NotFound from '../ModalConfirm/NotificationDiscount';
import Loading from '../Customer/Loading';
export function ListCustomer() {
    const [customer, setCustomer] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [showNotFoundModal, setShowNotFoundModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = customer.slice(firstIndex, lastIndex);
    const npage = Math.ceil(customer.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getAllCustomer();
    }, []);

    function changeCPage(id) {
        setCurrentPage(id);
    }
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const getAllCustomer = async () => {
        let temp;
        if (searchInput) {
            setLoading(true);
            temp = await customers.findByNameCustomer(searchInput);
            if (searchInput == '_') {
                setShowNotFoundModal(true);
            } else if (temp.length === 0) {
                setLoading(false);
                setShowNotFoundModal(true);
            } else {
                setCustomer(temp.filter((item) => item.delete === true));
                setLoading(false);
                setCurrentPage(1);
            }
        } else {
            temp = await customers.findAllCustomer();
            setCustomer(temp.filter((item) => item.delete === true));
            setLoading(false);
        }
    };
    const getDelete = async (id) => {
        await customers.getDeleteCustomer(id);
        toast.success('Xóa thành công');
        await getAllCustomer();
    };
    const handleDelete = (id) => {
        getDelete(id)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleCloseNotFoundModal = () => {
        setShowNotFoundModal(false);
    };
    return (
        <div className={styled['list_Customer_container-main']}>
            <div style={{ paddingBottom: '30px' }}>
                <h1>Danh Sách Khách Hàng</h1>
            </div>
            <div className="list_Discount_container-main">
                <div className={styled['row-container']}>
                    <div className={styled['List_customer_find_container-find']}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-mdb-ripple-init
                            style={{ width: '75px', height: '33px' }}
                            onClick={getAllCustomer}
                        >
                            Tìm
                        </button>
                        <input
                            type="text"
                            style={{ width: '190px', height: '36px' }}
                            placeholder="Tên , email"
                            class="form-control"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </div>
                    <div className="contaner-function">
                        <button
                            type="button"
                            className="btn btn-success"
                            data-mdb-ripple-init
                            style={{ width: '200px', height: '36px', fontSize: '13px' }}
                        >
                            Thêm mới khách hàng
                        </button>
                    </div>
                </div>
                <div className="container-table">
                    <table className="table align-middle mb-0 bg-white" style={{ width: '1000px' }}>
                        <thead className="bg-light">
                            <tr className={styled['headtr-customer']}>
                                <th scope="col" className={styled['head-customer']}></th>
                                <th scope="col" className={styled['head-customer']}>
                                    Mã Khách Hàng
                                </th>
                                <th scope="col" className={styled['head-customer']}>
                                    Tên
                                </th>
                                <th scope="col" className={styled['head-customer']}>
                                    Giới Tính
                                </th>
                                <th scope="col" className={styled['head-customer']}>
                                    Điểm
                                </th>
                                <th scope="col" className={styled['head-customer']}>
                                    Loại
                                </th>
                                <th scope="col" className={styled['head-customer']}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="7">
                                        <Loading />
                                    </td>
                                </tr>
                            ) : (
                                records.map((customer, index) => {
                                    const rowNumber = firstIndex + index + 1;
                                    
                                    return (
                                        <tr key={index} className={styled['headtr-customer']}>
                                            <td className="text-center" style={{ fontSize: '13px' }}>
                                                {' '}
                                                {rowNumber}
                                            </td>
                                            <td className="text-center" style={{ fontSize: '13px' }}>
                                                {customer.id}
                                            </td>
                                            <td className={styled['text-center']}>
                                                <div className="d-flex align-items-center">
                                                    <div className="ms-3">
                                                        <p className="fw-bold mb-1" style={{ fontSize: '13px' }}>
                                                            {customer.name}
                                                        </p>
                                                        <p className="text-muted mb-0" style={{ fontSize: '13px' }}>
                                                            {customer.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center" style={{ fontSize: '13px' }}>
                                                {customer.gender ? 'Nam' : 'Nữ'}
                                            </td>
                                            <td className="text-center" style={{ fontSize: '13px' }}>
                                                {customer.point}
                                            </td>
                                            <td className="text-center" style={{ fontSize: '13px' }}>
                                                {customer.customerType.typeName}
                                            </td>
                                            <td className="text-center" style={{ fontSize: '13px' }}>
                                                <div className={styled['action']}>
                                                    <Example2
                                                        id={customer.id}
                                                        name={customer.name}
                                                        handleDelete={handleDelete}
                                                    />
                                                    <button class="btn btn-success" ids={customer.id}>
                                                        Sửa
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
                <nav className={styled['container-pagination']}>
                    <ul className="pagination pagination-circle">
                        {npage > 1 && (
                            <li className="page-item">
                                <a href="#" className="page-link" onClick={prePage}>
                                    Trước
                                </a>
                            </li>
                        )}
                        {numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a href="#" className="page-link" onClick={() => changeCPage(n)}>
                                    {n}
                                </a>
                            </li>
                        ))}
                        {npage > 1 && (
                            <li className="page-item">
                                <a href="#" className="page-link" onClick={nextPage}>
                                    Sau
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <NotFound show={showNotFoundModal} handleClose={handleCloseNotFoundModal} />
        </div>
    );
}
