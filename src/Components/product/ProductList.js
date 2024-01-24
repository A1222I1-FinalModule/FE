import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import * as ProductService from "../../Services/product/ProductService";
import styles from "../product/Product.module.css";

const cx = classNames.bind(styles);


const INIT_PAGE = 1;
const PER_PAGE = 6;
const ODER = 'desc'

export default function ProductList() {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState(INIT_PAGE);
  const [perPage, setPerPage] = useState(PER_PAGE);
  const [totalPages, setTotalPages] = useState(1);
  const [searchInput, setSearchInput] = useState('');



  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = product.slice(firstIndex, lastIndex);
  const npage = Math.ceil(product.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    getAllListProduct();
  }, [name]);

  const getAllListProduct = async () => {
    let temp;
    if (name) {
      temp = await ProductService.findByNameProduct(name);
      if (temp.length === 0) {
        alert('NOT FOUND.');
      } else {
        setProduct(temp);
      }

    } else {
      temp = await ProductService.getAllListProduct();
      setProduct(temp);
    }
  };
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

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('col')}>
            <div className={cx('card')}>
              <div className={cx('card-header')}>
                <h3 className={cx('fst-italic')}>
                  {" "}
                  <i className={cx('fa-solid fa-list')} /> Sản phẩm đang có trong kho
                </h3>
                <div className={cx('input-group')}>
                  <div className={cx('col-sm-6')}>
                    <input
                      type="search"
                      className={cx('form-control rounded')}
                      placeholder
                      aria-label="Search"
                      aria-describedby="search-addon"
                      value={name}
                      onChange={(evt) => setName(evt.target.value)}

                    />
                  </div>
                  <button
                    type="button"
                    className={cx('btn btn-outline-primary')}
                    data-mdb-ripple-init
                    onClick={getAllListProduct}
                  >
                    Tìm kiếm
                  </button>
                </div>
              </div>
              <div className={cx('card-body')}>
                <table className="table table-bordered border-secondary table-secondary table-striped table-hover">
                  <thead>
                    <tr className="text-center">
                      <th className={cx('align-middle')}>#</th>
                      <th className={cx('align-middle')}>Mã hàng hóa</th>
                      <th className={cx('align-middle')}>Tên hàng hóa</th>
                      <th className={cx('align-middle')}>Số lượng</th>
                      <th className={cx('align-middle')}>Hình ảnh</th>
                      <th className={cx('align-middle')}>Giá</th>
                      <th className={cx('align-middle')}>Loại hàng hóa</th>
                      <th className={cx('align-middle')}>Size</th>


                    </tr>
                  </thead>
                  <tbody>
                    {records.map((values, index) => {
                      const rowNumber = firstIndex + index + 1;
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
                            <img className={cx('pictureList')} src={`${values.image}`} alt={`photo${index + 1}`} />
                          </td>
                          <td scope="col" style={{ textAlign: "right" }}>
                            {values.price}
                          </td>
                          <td scope="col" style={{ textAlign: "center" }}>
                            {values.productCategory.name}
                          </td>
                          <td scope="col" style={{ textAlign: "center" }}>
                            {/* {size.map(size => <div>{values.size}</div>)} */}
                            {values.size.size}
                          </td>


                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <nav className={cx['container-pagination']}>
                  <ul className="pagination pagination-circle">
                    <li className="page-item">
                      <a href="#" className="page-link" onClick={prePage}>
                        Trước
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
                        Sau
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

