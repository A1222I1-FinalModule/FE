import { useState, useEffect } from "react";
import * as importingService from '../Services/API/ImportingService'
import * as productService from '../Services/productService'
import * as employeeService from '../Services/API/EmployeeService'
import style from '../Assets/css/StatisticalTable.module.css'

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
    const response = await productService.getProducts()
    setProductsData(response)
  }

  const getImportNextId = async () => {
    const response = await importingService.getMaxIdByWarehouse() + 1
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
      window.alert("Số lượng phải lớn hơn 0!")
    }
  }

  const handleAddProduct = () => {
    if (quantity <= 0) {
      window.alert("Số lượng phải lớn hơn 0!")
      return null
    } else {
      setProducts(
        [
          ...products,
          { ...product, quantity: quantity }
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
        response = await importingService.saveByWarehouse(importing)
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
          await productService.updateQuantityByWarehouse(newProduct)
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
        window.alert("Nhập hàng thất bại!")
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
    <div className={`col-10`}>
      <div className={style.data_input}>
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
                    <tr >
                      <td>
                        <button onClick={handleAddProduct} className="btn btn btn-success">ADD</button>
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
                        <input type="text" className="form-control" value={product.price} />
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
                            <td>{product.price * product.quantity}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              &nbsp;
              <div className="row action_buttons">
                <div className="d-flex flex-wrap gap-4">
                  <button onClick={handleSubmit} className="btn btn-lg btn-primary fw-bold">XÁC NHẬN</button>
                  <button onClick={handleClear} className="btn btn-lg btn-outline-danger fw-bold">ĐẶT LẠI</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInput;