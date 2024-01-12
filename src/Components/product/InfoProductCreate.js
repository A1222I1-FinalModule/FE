import { useEffect } from "react";
import * as ProductService from "../../Services/product/ProductService";
import { Formik, Form, Field} from "formik";
import "../product/InfoProductCreate.css";

export default function InfoProductCreate() {
  const infoProductInit = {
    productCode: "",
    name: "",
    quantity: 0,
    size: "",
    category: "",
    price: 0,
  };

  // useEffect(() => {}, []);

  const saveInfoProduct = async (values) => {
    let temp = await ProductService.saveInfoProduct(values);
    console.log(temp)
    alert("Tạo mới thành công !");
    
  };

  return (
    <>
    <Formik
    initialValues={infoProductInit}
    onSubmit={(values) => {
      saveInfoProduct(values)
    }}
    >
      <div className="container">
        <h1 className="brand">
          <span>FASHION SHOP</span>
        </h1>
        <div className="wrapper">
          <div className="company-info">
            <h3>FASHION SHOP</h3>
            <ul>
              <li>
                <i className="fa fa-road" /> 44 Main Street
              </li>
              <li>
                <i className="fa fa-phone" /> (555) 555-5555
              </li>
              <li>
                <i className="fa fa-envelope" /> fashionshop@phoenix.com
              </li>
            </ul>
          </div>
           
          <div className="contact">
            <h3 className="text-primary">Create Product</h3>
            <Form>
            {/* <p>
                  <label className="text-primary" htmlFor="">Id</label>
                  <Field
                    type="text"
                    name="id"
                    id="productCode"
                    required
                    placeholder="Please enter your id"
                  />
                </p> */}
              <p>
                  <label className="text-primary" htmlFor="">Product's code</label>
                  <Field
                    type="text"
                    name="productCode"
                    id="productCode"
                    required
                    placeholder="Please enter your id"
                  />
                </p>
                <p>
                  <label className="text-primary" htmlFor="">Product's name</label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Please enter your name"
                  />
                </p>
                <p>
                  <label className="text-primary" htmlFor="">Quantity</label>
                  <Field
                    type="text"
                    name ="quantity"
                    id="quantity"
                    required
                    placeholder="Please enter your price"
                  />
                </p>
               
                <div className="form-group">
                  <label
                    htmlFor
                    className="col-sm-2 col-form-label text-primary"
                  >
                    Size
                  </label>
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="XS"
                      defaultValue
                    />
                    <label
                      className="form-check-label text-primary"
                      htmlFor="XS"
                    >
                      XS
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="S"
                      defaultValue
                    />
                    <label
                      className="form-check-label text-primary"
                      htmlFor="S"
                    >
                      S
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="M"
                      defaultValue
                    />
                    <label
                      className="form-check-label text-primary"
                      htmlFor="M"
                    >
                      M
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="L"
                      defaultValue
                    />
                    <label
                      className="form-check-label text-primary"
                      htmlFor="L"
                    >
                      L
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="XL"
                      defaultValue
                    />
                    <label
                      className="form-check-label text-primary"
                      htmlFor="XL"
                    >
                      XL
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="XXL"
                      defaultValue
                    />
                    <label
                      className="form-check-label text-primary"
                      htmlFor="XXL"
                    >
                      XXL
                    </label>
                  </div>
                </div>
                {/* <div className="form-group row">
                  <label htmlFor="picture" className="text-primary">
                    Image
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/upload-image-8079452-6458695.png"
                      id="picture"
                    />
                    <i className="fas fa-image" />
                  </label>
                  <div className="custom-file">
                    <input
                      type="file"
                      name
                      accept=".png,.gif,.jpg,.jpeg"
                      id="input-file"
                    />
                  </div>
                </div> */}
                <div className="form-group">
                  <label htmlFor="category" className="text-primary">
                    Category Product
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="category"
                    name="category"
                  >
                    <option selected>Category</option>
                    <option value={1}>Men's clothes</option>
                    <option value={2}>Women clothes</option>
                    <option value={3}>Children's clothing</option>
                  </select>
                </div>
                <p>
                  <label className="text-primary">Price</label>
                  <Field
                    type="text"
                    name="price"
                    id="price"
                    required
                    placeholder="Please enter your price"
                  />
                </p>
                <p className="full">
                  <button type="submit">Save</button>
                </p>
           
              </Form>
          </div>
        </div>
      </div>
    </Formik>
    </>
  );
}
