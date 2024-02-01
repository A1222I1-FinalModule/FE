import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import * as ProductService from "../../Services/Product/ProductService";
import styles from "../product/Product.module.css";
import LoadingProduct from '../product/LodingProduct';
import { formatMoney } from '../../utils/helpers'
import ReactPaginate from "react-paginate";

const cx = classNames.bind(styles);

function Items({ currentItems }) {
  const [loading, setLoading] = useState(true);
  return (
 
    <>
        {currentItems.map((values, index) => (
          <tr>

            <td scope="col" style={{ textAlign: "center" }}>
              {values.productCode}
            </td>
            <td scope="col" >
              {values.name}
            </td>
            <td scope="col" style={{ textAlign: "center" }}>
              {values.quantity}
            </td>
            <td scope="col" style={{ textAlign: "center" }}>
              <img className={cx('pictureList')} src={`${values.image}`} alt={`photo${index + 1}`} />
            </td>
            <td scope="col" style={{ textAlign: "right" }}>
              {formatMoney(values.price)}
            </td>
            <td scope="col" style={{ textAlign: "center" }}>
              {values.productCategory.name}
            </td>
            <td scope="col" style={{ textAlign: "center" }}>
              {/* {size.map(size => <div>{values.size}</div>)} */}
              {values.size.size}
            </td>
          </tr>
        ))
        }            
    </>
  
  )
}

function PaginatedItems({ itemsPerPage, items }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <table className="table table-bordered border-secondary table-secondary table-striped table-hover">
        <thead>
          <tr className="text-center">
            <th className={cx('align-middle')} style={{ width: "5%" }}>Mã</th>
            <th className={cx('align-middle')} style={{ width: "55%" }}>Tên hàng hóa</th>
            <th className={cx('align-middle')} style={{ width: "5%" }}>Số lượng</th>
            <th className={cx('align-middle')} style={{ width: "10%" }}>Hình ảnh</th>
            <th className={cx('align-middle')} style={{ width: "10%" }}>Giá</th>
            <th className={cx('align-middle')} style={{ width: "10%" }}>Loại hàng hóa</th>
            <th className={cx('align-middle')} style={{ width: "5%" }}>Size</th>


          </tr>
        </thead>
        <tbody>
          
          <Items currentItems={currentItems} />
        </tbody>
      </table>
      <div className="text-center w-100">
        <ReactPaginate
          breakLabel="..."
          breakClassName='page-item'
          breakLinkClassName='page-link normal-txt-payment'
          nextLabel="&raquo;"
          nextClassName="page-item"
          nextLinkClassName="page-link normal-txt-payment"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="&laquo;"
          previousClassName="page-item"
          previousLinkClassName="page-link normal-txt-payment"
          renderOnZeroPageCount={null}
          className={cx('pagination-content') + " pagination justify-content-center"}
          pageClassName="page-item"
          pageLinkClassName="page-link normal-txt-payment"
          activeClassName="active"
        />
      </div>

    </>
  );
}
export default function ProductList() {
  const [product, setProduct] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllListProduct();
  }, []);

  const getAllListProduct = async () => {
    let temp;
    if (searchInput) {
      setLoading(true);
      temp = await ProductService.findByNameProduct(searchInput);
      if (temp.length === 0) {
        alert('Không tìm thấy sản phẩm bạn cần tìm!');
      } else {
        setProduct(temp);
        setLoading(false);
      }

    } else {
     
      temp = await ProductService.getAllListProduct();
      temp.sort((a, b) => b.number - a.number);
      setProduct(temp);
      setLoading(false);
    }
  };
  return (
    <div className={cx('wrapper')}>

      <div className={cx('row')} style={{ height: "100%" }}>
        <div className={cx('col')} style={{ height: "100%" }}>
          <div className={cx('card')} style={{ height: "100%" }}>
            <div className={cx('card-header') + " text-center"}>
              <h3 className={cx('fst-italic')}>
                Sản phẩm đang có trong kho
              </h3>
              <div className={'input-group' + " p-3 " + cx("input")}>

                <input
                  style={{ width: '60%', flex: "none" }}
                  type="search"
                  className={cx('form-control rounded') } 
                  placeholder
                  aria-label="Search"
                  aria-describedby="search-addon"
                  value={searchInput}
                  onChange={(evt) => setSearchInput(evt.target.value)}
                />
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
            <div >
              <PaginatedItems itemsPerPage={5} items={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

