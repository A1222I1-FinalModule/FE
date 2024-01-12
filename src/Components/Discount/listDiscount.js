import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "google-fonts";
import "./listDiscount.css";
import { useEffect, useState } from "react";
import * as discounts from "../../service/RentService";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import { Modal } from "bootstrap";
import Example from "./Modal";
import moment from 'moment';
export function Discount() {
    const[discount,setDiscount]=useState([]);
    useEffect(() => {
        getAllDiscount();
      }, []);
      const getAllDiscount = async () => {
        let temp = await discounts.findAllDiscount();
        setDiscount(temp);
      };
      const getDelete = async (id) => {
        await discounts.getDeleteDiscount(id);
        await getAllDiscount();
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
  return (
    <div>
      <div className="list_Discount_container-main">
        <div style={{ paddingBottom: "30px" }}>
          <h1>List Discount</h1>
        </div>
        <div className="row-container">
          <div className="List_customer_find_container-find">
            <button
              type="button"
              className="btn btn-primary"
              data-mdb-ripple-init
              style={{ width: "75px",height:"36px" }}
            >
              Find
            </button>
            <input type="text" style={{width: "190px",height:"36px"}} placeholder="name"/>
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
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Condition</th>
                <th scope="col">Point</th>
                <th scope="col">Type</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
          {discount.map((discount, index) => {
            return (
              <tr key={index}>
                <td>{discount.id}</td>
                <td>
                    <div className="d-flex align-items-center text-nowrap">
                        <span>{discount.name}</span>
                    </div>
                </td>
                <td>{discount.condition}</td>
                <td>{discount.rewardPoint}</td>
                <td>{discount.type}</td>
                <td>{moment(discount.beginDate).format('DD/MM/YYYY')}</td>
                <td>{moment(discount.endDate).format('DD/MM/YYYY')}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    ids={discount.id}
                    onClick={() => handleDelete(discount.id)}
                  >
                    Delete
                  </button>
                  {/* <Example id={employee.id} handleDelete={handleDelete}/> */}
                  <button
                    className="btn btn-danger"
                    >
                      <Link to={`/updateDiscount/${discount.id}`}>Update</Link>
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
              {/* Add other page items */}
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