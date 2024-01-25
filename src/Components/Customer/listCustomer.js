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
            temp = await customers.findByNameCustomer(searchInput);
            if (temp.length === 0) {
                setShowNotFoundModal(true);
            }else{
                setCustomer(temp.filter(item => item.delete === true));
            }
            
        } else {
            temp = await customers.findAllCustomer();
            setCustomer(temp.filter(item => item.delete === true));
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
                            placeholder="name"
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
                            style={{ width: '200px' }}
                        >
                            Thêm mới khách hàng
                        </button>
                    </div>
                </div>
                <div className="container-table">
                    <table className="table align-middle mb-0 bg-white">
                        <thead className="bg-light">
                            <tr className={styled['headtr-customer']}>
                                <th scope="col" className={styled['head-customer']}></th>
                                <th scope="col" className={styled['head-customer']}>Code</th>
                                <th scope="col" className={styled['head-customer']}>Tên</th>
                                <th scope="col" className={styled['head-customer']}>Giới Tính</th>
                                <th scope="col" className={styled['head-customer']}>Điểm</th>
                                <th scope="col" className={styled['head-customer']}>Loại</th>
                                <th scope="col" className={styled['head-customer']}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((customer, index) => {
                                const rowNumber = firstIndex + index + 1;
                                return (
                                    <tr key={index} className={styled['headtr-customer']}>
                                        <td className={styled['headtd-customer']}> {rowNumber}</td>
                                        <td className={styled['headtd-customer']}>{customer.id}</td>
                                        <td className={styled['headtd-customer']}>
                                            <div className="d-flex align-items-center">
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">{customer.name}</p>
                                                    <p className="text-muted mb-0">{customer.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={styled['headtd-customer']}>{customer.gender ? 'Nam' : 'Nữ'}</td>
                                        <td className={styled['headtd-customer']}>{customer.point}</td>
                                        <td className={styled['headtd-customer']}>{customer.customerType.typeName}</td>
                                        <td className={styled['headtd-customer']}>
                                            <div className={styled['action']}>
                                                <Example2 id={customer.id} name={customer.name} handleDelete={handleDelete} />
                                                <button
                                                    class="btn btn-success"
                                                    ids={customer.id}
                                                    onClick={() => handleDelete(customer.id)}
                                                >
                                                    Sửa
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <nav className={styled['container-pagination']}>
                    <ul className="pagination pagination-circle">
                        <li className="page-item">
                            <a href="#" className="page-link" onClick={prePage}>
                                Sau
                            </a>
                        </li>
                        {numbers.map((n, i) => {
                            return (
                                <li className={`page-item ${currentPage == n ? `active` : ` `}`} key={i}>
                                    <a href="#" className="page-link" onClick={() => changeCPage(n)}>
                                        {n}
                                    </a>
                                </li>
                            );
                        })}
                        <li className="page-item">
                            <a href="#" className="page-link" onClick={nextPage}>
                                Trước
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <NotFound show={showNotFoundModal} handleClose={handleCloseNotFoundModal} />
        </div>
    );
}
