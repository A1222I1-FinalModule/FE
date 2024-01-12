import { useEffect, useState } from "react";
import * as ProductService from "../../Services/product/ProductService";
import "../product/Product.css";


export default function ProductList() {
  const [product, setProduct] = useState([]);
  const [name,setName] = useState("");

  useEffect(() => {
    getAllListProduct();
  },[name]);

  const getAllListProduct =  async () => {
      let temp = await ProductService.getAllListProduct(name);
      setProduct(temp);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h3 className="fst-italic">
                  {" "}
                  <i className="fa-solid fa-list" /> Products are in stock
                </h3>
                <div className="input-group">
                  <div className="col-sm-6">
                    <input
                      type="search"
                      className="form-control rounded "
                      placeholder
                      aria-label="Search"
                      aria-describedby="search-addon"
                      onChange={(evt) => setName(evt.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className=" btn btn-outline-primary"
                    data-mdb-ripple-init
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="card-body">
                <table className="table table-bordered border-secondary table-secondary table-striped table-hover">
                  <thead>
                    <tr className="text-center">
                      <th className="align-middle">#</th>
                      <th className="align-middle">Product code</th>
                      <th className="align-middle">Product's name</th>
                      <th className="align-middle">Quantity</th>
                      <th className="align-middle">Size</th>
                      <th className="align-middle">Category</th>
                      <th className="align-middle">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((values, index) => {
                      return (
                        <tr>
                          <td scope="col" style={{ textAlign: "center" }}>
                            {index}
                          </td>
                          <td scope="col" style={{ textAlign: "center" }}>
                            {values.productCode}
                          </td>
                          <td scope="col" style={{ textAlign: "center" }}>
                            {values.name}
                          </td>
                          <td scope="col" style={{ textAlign: "center" }}>
                            {values.quantity}
                          </td>
                          <td scope="col" style={{ textAlign: "center" }}>
                            {values.size}
                          </td>
                          <td scope="col" style={{ textAlign: "center" }}>
                            {values.category}
                          </td>
                          <td scope="col" style={{ textAlign: "right" }}>
                            {values.price}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="#"
                        tabIndex={-1}
                        aria-disabled="true"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
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
        </div>
      </div>
    </div>
  ) 
}
