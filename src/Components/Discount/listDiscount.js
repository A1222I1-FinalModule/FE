import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Discount/listDiscount.module.css";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "google-fonts";
import { useEffect, useState } from "react";
import * as discounts from "../../Services/API/Discount/discount";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Example from "../ModalConfirm/ModalConfirm";
export function Discount() {
  const [discount, setDiscount] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = discount.slice(firstIndex, lastIndex);
  const npage = Math.ceil(discount.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    getAllDiscount();
  }, []);
  const getAllDiscount = async () => {
    let temp;
    if (searchInput) {
      temp = await discounts.getFindByNameDiscount(searchInput);
    } else {
      temp = await discounts.findAllDiscount();
    }
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
  const handleUpdateClick = (discountCode) => {
    navigate(`/updateDiscount/${discountCode}`);
}
  return (
    <div>
      <div className={styles["list_Discount_container-main"]}>
        <div style={{ paddingBottom: "30px" }}>
          <h1>List Discount</h1>
        </div>
        <div className={styles["row-container"]}>
          <div className={styles["List_customer_find_container-find"]}>
            <button
              type="button"
              className="btn btn-primary"
              data-mdb-ripple-init
              style={{ width: "75px", height: "36px" }}
              onClick={getAllDiscount}
            >
              Find
            </button>
            <input
              type="text"
              style={{ width: "190px", height: "36px" }}
              placeholder="name"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="contaner-function">
            <button
              type="button"
              className="btn btn-success"
              data-mdb-ripple-init
              style={{ width: "200px" }}
              onClick={() => navigate("/createDiscount")}
            >
              Add new Discount
              <NavLink to="/createDiscount"></NavLink>
            </button>
          </div>
        </div>
        <div className={styles["container-table"]}>
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
              {records.map((discount, index) => {
                return (
                  <tr key={index}>
                    <td>{discount.discountCode}</td>
                    <td>
                      <div className="d-flex align-items-center text-nowrap">
                        <span>{discount.name}</span>
                      </div>
                    </td>
                    <td>{discount.condition}</td>
                    <td>{discount.rewardPoint}</td>
                    <td>{discount.customerType.typeName}</td>
                    <td>{moment(discount.beginDate).format("DD/MM/YYYY")}</td>
                    <td>{moment(discount.endDate).format("DD/MM/YYYY")}</td>
                    <td>
                      <div className={styles["action"]}>
                        <Example
                          id={discount.discountCode}
                          handleDelete={handleDelete}
                        />
                        <button
                          class="btn btn-success"
                          ids={discount.discountCode}
                          onClick={() => handleUpdateClick(discount.discountCode)}
                        >
                            Update
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <nav className={styles["container-pagination"]}>
          <ul className="pagination pagination-circle">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => {
              return (
                <li
                  className={`page-item ${currentPage == n ? `active` : ` `}`}
                  key={i}
                >
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => changeCPage(n)}
                  >
                    {n}
                  </a>
                </li>
              );
            })}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
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
}
