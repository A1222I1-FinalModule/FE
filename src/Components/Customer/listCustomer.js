import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "google-fonts";
import "../Customer/listCustomer.css";
import { useEffect, useState } from "react";
import * as discounts from "../../Services/API/Customer/customer";
export function ListCustomer() {
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    getAllCustomer();
    console.log(123);
  }, []);
  const getAllCustomer = async () => {
    let temp = await discounts.findAllCustomer();
    setCustomer(temp);
  };
  const getDelete = async (id) => {
    await discounts.getDeleteCustomer(id);
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
  if(!customer) return null;
  return (
    <div className="list_Customer_container-main">
      <div className="list_Discount_container-main">
        <div className="row-container">
          <div className="List_customer_find_container-find">
            <button
              type="button"
              className="btn btn-primary"
              data-mdb-ripple-init
              style={{ width: "75px", height: "36px" }}
            >
              Find
            </button>
            <input
              type="text"
              style={{ width: "190px", height: "36px" }}
              placeholder="name"
            />
          </div>
          <div className="contaner-function">
            <button
              type="button"
              className="btn btn-success"
              data-mdb-ripple-init
              style={{ width: "200px" }}
            >
              Add new Discount
            </button>
          </div>
        </div>
        <div className="container-table">
          <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <tr>
                <th>Number</th>
                <th>Code</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Point</th>
                <th>Rank</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customer.map((customer, index) => {
                return (
                  <tr key={index}>
                    <td> {index + 1}</td>
                    <td>{customer.id}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{customer.name}</p>
                          <p className="text-muted mb-0">{customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td>{customer.gender ? "Nam" : "Nữ"}</td>
                    <td>{customer.point}</td>
                    <td>{customer.customerType.id}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        ids={customer.id}
                        onClick={() => handleDelete(customer.id)}
                      >
                        Delete
                      </button>
                      {/* <Example id={employee.id} handleDelete={handleDelete}/> */}
                      <button className="btn btn-danger">
                        {/* <Link to={`/updateDiscount/${customer.id}`}>
                          Update
                        </Link> */}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="container-pagination">
          <nav aria-label="...">
            <ul className="pagination pagination-circle">
              <li className="page-item">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">
                  1<span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
