import { Formik, Form } from "formik";
import { useState } from "react";
import data from "../data/db.json";

const GetInput = ({ userId }) => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({
    "productCode": "",
    "name": "",
    "quantity": "",
    "productCategory": "",
    "size": "",
    "price": ""
  })
  const [quantity, setQuantity] = useState(0)
  const productsData = data["products"]

  const date = new Date().toLocaleDateString()

  const handleProduct = (productCode) => {
    const product = productsData.find(product => product.productCode === productCode)
    if (product === undefined) {
      setProduct({
        "productCode": "",
        "name": "",
        "quantity": "",
        "productCategory": "",
        "size": "",
        "price": ""
      })
      
    } else {
      setProduct(product)
    }
  }

  const handleChangeQuantity = (quantity) => {
    setQuantity(quantity)
  }

  return (
    <div className="data_input">
      <div className="container">
        <Formik
          initialValues={
            {
              "customerId": userId,
              "releaseDate": date,
            }
          }
          onSubmit={async (values) => {
            // const response = await billService.save(values)
            console.log("ok");
          }}
        >
          <Form>
            <div className="card text-dark mb-3" style={{ maxWidth: '50rem' }}>
              <div className="card-body">
                <form action="#">
                  <div className="row">
                    <div className="col-sm-3 title">
                      <label htmlFor="contract_id" className="form-label">Mã phiếu</label>
                    </div>
                    <div className="col-sm-9">
                      <p id="contract_id">{ }</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 title">
                      <label htmlFor="input_employee_id" className="form-label">Người nhập</label>
                    </div>
                    <div className="col-sm-9">
                      <p id="input_employee_id">{userId}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 title">
                      <label htmlFor="input_date" className="form-label">Ngày/tháng/năm</label>
                    </div>
                    <div className="col-sm-9">
                      <p>{date}</p>
                    </div>
                  </div>
                </form>
                &nbsp;
                {/* <button className="btn btn-sm btn-secondary" id="add_product_btn">Thêm</button> */}
                <div className="row">
                  <table className="table table table-striped">
                    <thead className>
                      <tr><th scope="col">STT</th>
                        <th scope="col">Mã hàng</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Size</th>
                        <th scope="col">Đơn giá</th>
                      </tr></thead>
                    <tbody>
                      <tr >
                        <td>
                          <button className="btn btn-sm btn-success" id="add_product_btn">ADD</button>
                        </td>
                        <td>
                          <select className="form-select form-select-sm" onChange={(evt) => handleProduct(evt.target.value)}>
                            <option defaultValue>Chọn mã hàng</option>
                            {
                              productsData.map((product, index) => {
                                return (
                                  <option key={product.productCode}>{product.productCode}</option>
                                )
                              })
                            }
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" value={product.name} />
                        </td>
                        <td>
                          <input type="text" className="form-control" onChange={(evt) => handleChangeQuantity(evt.target.value)} value={quantity} />
                        </td>
                        <td>
                          <input type="text" className="form-control" id="new_product_size" />
                        </td>
                        <td>
                          <input type="text" className="form-control" id="new_product_price" />
                        </td>
                      </tr>
                      {
                        products.map((product, index) => {
                          return (
                            <tr key={product.id}>
                              <td>{index + 1}</td>
                              <td>{product.productCode}</td>
                              <td>{product.name}</td>
                              <td>{product.quantity}</td>
                              <td>{product.size}</td>
                              <td>{product.price}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
                &nbsp;
                <div className="row action_buttons">
                  <div className="col-sm-6">
                    <button type="submit" className="btn btn-primary">Xác nhận</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="btn btn-outline-danger">Hủy</button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>

  )
}

export default GetInput;