import { useState, useEffect } from "react";
import * as importingService from '../../Services/API/ImportingService'
import * as productService from '../../Services/Product/ProductService'
import * as employeeService from '../../Services/API/EmployeeService'
import style from '../../Assets/css/StatisticalTable.module.css'
import { Form, Formik } from "formik";
import { formatMoney } from '../../utils/helpers';

const GetInput = () => {
  const [importId, setImportId] = useState("")
  const [importing, setImporting] = useState({})
  const [productsData, setProductsData] = useState([])
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({
    "productCode": "",
    "name": "",
    "quantity": "",
    "productCategory": "",
    "size": "",
    "price": ""
  })
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [employee, setEmployee] = useState({})
  const date = new Date().toLocaleDateString()
  console.log(new Date().toISOString());

  useEffect(() => {
    getProductData()
    getImportNextId()
    getUserInfo()
    setImporting({
      id: importId,
      importDate: getDateTime(),
      total: 0,
      employee: employee
    })
  }, [])


  const getProductData = async () => {
    const response = await productService.getAllListProduct()
    setProductsData(response)
  }

  const getImportNextId = async () => {
    const response = await importingService.getMaxId() + 1
    setImportId(response)
  }

  const getUserInfo = async () => {
    const response = await employeeService.getUser("ROLE_WAREHOUSE")
    setEmployee(response)
  }

  const getDateTime = () => {
    let date = new Date().toLocaleDateString().split("/")
    if (date[0] === "1") {
      date[0] = "01"
    } else if (date[0] === "2") {
      date[0] = "02"
    }
    date = date[2] + "-" + date[0] + "-" + date[1]
    const time = new Date().toLocaleTimeString()
    return date + " " + time.slice(0, time.length - 3)
  }

  const handleProduct = (name) => {
    const product = productsData.find(product => product.name === name)
    if (product === undefined) {
      window.alert("Mặt hàng chưa tồn tại. Hãy thêm thông tin mặt hàng trước!")
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
    if (quantity > 0) {
      setQuantity(quantity)
    } else {
      window.alert("Số lượng phải là số lớn hơn 0!")
    }
  }
  const handleChangePrice = (price) => {
    if (price > 0) {
      setPrice(price)
    } else {
      window.alert("Giá tiền phải là số lớn hơn 0!")
    }
  }

  const handleAddProduct = () => {
    if (quantity <= 0 || price <= 0) {
      window.alert("Số lượng và giá tiền phải là số lớn hơn 0!")
      return null
    } else {
      setProducts(
        [
          ...products,
          { ...product, quantity: quantity, price: price }
        ]
      )
      setProduct({
        "productCode": "",
        "name": "",
        "quantity": "",
        "productCategory": "",
        "size": "",
        "price": ""
      })
      document.getElementById("productName").value = "Chọn mặt hàng"
      document.getElementById("productSize").value = ""
      setQuantity("")
      setPrice("")
    }
  }

  const handleSubmit = async () => {
    if (window.confirm("Bạn có chắc chắn muốn nhập các mặt hàng trong danh sách?")) {
      const total = products.reduce((total, product) => {
        return total + (product.quantity * product.price)
      }, 0)
      setImporting({
        ...importing,
        total: total
      })
      let response
      try {
        response = await importingService.save(importing)
      } catch (error) {
        console.log(error)
      }
      if (response === "success") {
        window.alert("Nhập hàng thành công!")
        products.forEach(async (product) => {
          const newProduct = {
            ...product,
            quantity: response.quantity + product.quantity
          }
          await productService.updateProductQuantity(product.productCode, newProduct)
        })
        setProducts([])
        setProduct({
          "productCode": "",
          "name": "",
          "quantity": "",
          "productCategory": "",
          "size": "",
          "price": ""
        })
        document.getElementById("productName").value = "Chọn mặt hàng"
        document.getElementById("productSize").value = ""
        setQuantity("")
      } else {
        window.alert("Nhập hàng thành công!")
      }
    }
  }

  const handleClear = () => {
    if (window.confirm("Bạn có chắc muốn hủy?", "Hủy")) {
      setProducts([])
      setProduct({
        "productCode": "",
        "name": "",
        "quantity": "",
        "productCategory": "",
        "size": "",
        "price": ""
      })
      document.getElementById("productName").value = "Chọn mặt hàng"
      document.getElementById("productSize").value = ""
      setQuantity("")
    }
  }

  if (productsData === null) return null

  return (
    <div className={style.data_input}>
      <Formik
        initialValues={importing}
        enableReinitialize={true}
        onSubmit={() => handleSubmit()}
      >
        <Form>
          <div className={`container`}>
            <div className={`card text-dark mb-3 w-100`}>
              <div className={`card-body`}>
                <div className="row">
                  <div className="col-3 title">
                    <label htmlFor="input_employee_id" className="form-label">Mã phiếu</label>
                  </div>
                  <div className="col-9">
                    <p id="input_employee_id">{importId}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 title">
                    <label htmlFor="input_employee_id" className="form-label">Mã người nhập</label>
                  </div>
                  <div className="col-9">
                    <p id="input_employee_id">{employee.id}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 title">
                    <label htmlFor="input_date" className="form-label">Ngày/tháng/năm</label>
                  </div>
                  <div className="col-9">
                    <p>{date}</p>
                  </div>
                </div>
                &nbsp;
                {/* <button className="btn btn btn-secondary" id="add_product_btn">Thêm</button> */}
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
                      <tr className="input_row">
                        <td className="flex align-items-center justify-content-center">
                          <button type="button" onClick={handleAddProduct} className="btn btn-sm btn-success">ADD</button>
                        </td>
                        <td>
                          <input type="text" className="form-control" value={product.productCode} />
                        </td>
                        <td>
                          <select className="form-select form-select" onChange={(evt) => handleProduct(evt.target.value)} id="productName">
                            <option defaultValue>Chọn mặt hàng</option>
                            {
                              productsData.map((product, index) => {
                                return (
                                  <option key={product.productCode}>{product.name}</option>
                                )
                              })
                            }
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" onChange={(evt) => handleChangeQuantity(evt.target.value)} value={quantity} />
                        </td>
                        <td>
                          <input type="text" className="form-control" value={product.size.size} id="productSize" />
                        </td>
                        <td>
                          <input type="text" className="form-control" onChange={(evt) => handleChangePrice(evt.target.value)} value={price} />
                        </td>
                      </tr>
                      {
                        products.map((product, index) => {
                          return (
                            <tr key={product.productCode}>
                              <td>{index + 1}</td>
                              <td>{product.productCode}</td>
                              <td>{product.name}</td>
                              <td>{product.quantity}</td>
                              <td>{product.size.size}</td>
                              <td>{formatMoney(product.price * product.quantity)}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
                &nbsp;
                <div className="row">
                  <h4 className={`col-3 mb-2 ${style.title_total}`}>Tổng:</h4>
                  <div className="col-9 mb-2">
                    <p className={`${style.title_total}`}>{formatMoney(products.reduce((total, product) => {
                      return total + (product.quantity * product.price)
                    }, 0))}</p>
                  </div>
                </div>
                <div className={`row ${style.action_buttons}`}>
                  <div className="d-flex flex-wrap gap-4">
                    <button type="submit" className="btn btn-sm btn-primary fw-bold">XÁC NHẬN</button>
                    <button type="button" onClick={handleClear} className="btn btn-sm btn-outline-danger fw-bold">ĐẶT LẠI</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default GetInput;