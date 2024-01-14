import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import * as ProductService from "../../Services/product/ProductService";
import styles from  "../product/Product.module.css";

const cx = classNames.bind(styles);


const INIT_PAGE = 1;
const PER_PAGE = 5;
const ODER = 'desc'

export default function ProductList() {
  const [product, setProduct] = useState([]);
  const [name,setName] = useState("");
  const [page, setPage] = useState(INIT_PAGE);
  const [perPage, setPerPage] = useState(PER_PAGE);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getAllListProduct();
  },[name,page]);

  // const getAllListProduct =  async () => {
  //     let temp = await ProductService.getAllListProduct(name);
  //     setProduct(temp);
  // }

  const getAllListProduct = async () => {
    let temp = await ProductService.pageProduct(
      name,
      page,
      perPage
    )
    setProduct(temp.data);

    const totalCount = temp.headers.get("X-Total-Count");
    const totalPages = Math.ceil(totalCount / 5);
    setTotalPages(totalPages);
    console.log(temp);
  }

    const handleNextPage = () => {
      if (page < totalPages) {
        setPage((prev) => prev + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (page > 1) {
        setPage((prev) => prev - 1);
      }
    };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('col')}>
            <div className={cx('card')}>
              <div className={cx('card-header')}>
                <h3 className={cx('fst-italic')}>
                  {" "}
                  <i className={cx('fa-solid fa-list')} /> Products are in stock 
                </h3>
                <div className={cx('input-group')}>
                  <div className={cx('col-sm-6')}>
                    <input
                      type="search"
                      className={cx('form-control rounded')} 
                      placeholder
                      aria-label="Search"
                      aria-describedby="search-addon"
                      onChange={(evt) => setName(evt.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className={cx('btn btn-outline-primary')}  
                    data-mdb-ripple-init
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className={cx('card-body')}> 
                <table className="table table-bordered border-secondary table-secondary table-striped table-hover">
                  <thead>
                    <tr className="text-center">
                      <th className={cx('align-middle')}>#</th>  
                      <th className={cx('align-middle')}>Product code</th>
                      <th className={cx('align-middle')}>Product's name</th>
                      <th className={cx('align-middle')}>Quantity</th>
                      <th className={cx('align-middle')}>Size</th>
                      <th className={cx('align-middle')}>Category</th>
                      <th className={cx('align-middle')}>Price</th>
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
                <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className={`page-link ${page === 1 ? "disabled" : ""}`}
              onClick={handlePrevPage}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <p className="page-link">{page}</p>
          </li>
          <li className="page-item">
            <button
              className={`page-link ${page === totalPages ? "disabled" : ""}`}
              onClick={handleNextPage}
            >
              Next
            </button>
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

