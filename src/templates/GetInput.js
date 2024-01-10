import { Formik, Form } from "formik";
import * as billService from "../Services/BillService";
import { useState } from "react";
import { date } from "yup";

const GetInput = ({ userId, inputDate }) => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({
    "productCode": "",
    "name": "",
    "quantity": "",
    "productCategory": "",
    "size": "",
    "price": ""
  })
  const date = new Date().toLocaleDateString()

  return (
    <session className="data_input">
      <div className="container">
        <Formik
          initialValues={
            {
              "customerId": userId,
              "releaseDate": inputDate,

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
                      <p id="contract_id">102</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 title">
                      <label htmlFor="input_employee_id" className="form-label">Người nhập</label>
                    </div>
                    <div className="col-sm-9">
                      <p id="input_employee_id">20010</p>
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
                {/* <button class="btn btn-sm btn-secondary" id="add_product_btn">Thêm</button> */}
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
                      {/* <tr >
            <td scope="row">0</td>
            <td>
              <input type="text" class="form-control" id="new_product_id"/>
            </td>
            <td>
              <input type="text" class="form-control" id="new_product_name"/>
            </td>
            <td>
              <input type="text" class="form-control" id="new_product_quantity"/>
            </td>
            <td>
              <input type="text" class="form-control" id="new_product_size"/>
            </td>
            <td>
              <input type="text" class="form-control" id="new_product_price"/>
            </td>
          </tr> */}
                      <tr>
                        <td scope="row">1</td>
                        <td>102</td>
                        <td>Áo thun nam thời trang nhất 2023</td>
                        <td>10</td>
                        <td>XL</td>
                        <td>2,300,000</td>
                      </tr>
                      <tr>
                        <td scope="row">2</td>
                        <td>103</td>
                        <td>Áo sơ mi nữ phong cách nhất 2023</td>
                        <td>7</td>
                        <td>L</td>
                        <td>1,600,000</td>
                      </tr>
                      <tr>
                        <td scope="row">2</td>
                        <td>104</td>
                        <td>Áo khoác Unisex thời trang nhất 2023</td>
                        <td>12</td>
                        <td>L</td>
                        <td>2,100,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                &nbsp;
                <div className="row action_buttons">
                  <div className="col-sm-6">
                    <button className="btn btn-primary">Xác nhận</button>
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
    </session>

  )
}

export default GetInput;