import { useEffect } from "react";
import * as ProductService from "../../Services/product/ProductService";
import { Formik, Form, Field,ErrorMessage} from "formik";
import styles from "../product/InfoProductCreate.module.css";
import classNames from "classnames/bind";
import * as Yup from "yup";


const cx = classNames.bind(styles);

export default function InfoProductCreate() {
  const infoProductInit = {
    productCode: "",
    name: "",
    quantity: 0,
    size: "",
    category: "",
    price: 0,
  };


  const productValidate = {
    productCode : Yup.string()
    .required("Required")
    .matches(/^H[0-9]{3,9}$/, "Not format"),
    name : Yup.string()
    .required("Required")
    .matches(/^[A-Z][a-zA-Z0-9 /]{2,29}$/, "Invalid Characters 3-10"),
    quantity : Yup.string()
    .required("Required")
    .min(1,"Quantity must be at least 1 or more"),
    size : Yup.string()
    .required("Required"),
    category : Yup.string()
      .required("Required"),
    price : Yup.string()
    .required("Required")
    .min(1,"Price must be at least 1 VND or more")
  }

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
    validationSchema={
      Yup.object(productValidate)
    }
    >
      <div className={cx('container')}>
        <h1 className={cx('brand')}>
          <span>FASHION SHOP</span>
        </h1>
        <div className={cx('wrapper')}>
          <div className={cx('company-info')}> 
            <h3>FASHION SHOP</h3>
            <ul>
              <li>
                <i className={cx('fa fa-road')}/> 44 Main Street  
              </li>
              <li>
                <i className={cx('fa fa-phone')}/> (555) 555-5555  
              </li>
              <li>
                <i className={cx('fa fa-envelope')}/> fashionshop@phoenix.com  
              </li>
            </ul>
          </div>
           
          <div className={cx('contact')}>
            <h3 className={cx('text-primary')}>Create Product</h3> 
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
                  <label className={cx('text-primary')} htmlFor="">Product's code</label>
                  <Field
                    type="text"
                    name="productCode"
                    id="productCode"
                    required
                    placeholder="Please enter your id"
                  />
                <ErrorMessage style={{color : "red"}} name="productCode" component="span" className={cx('form-err')} ></ErrorMessage>
                </p>
                <p>
                  <label className={cx('text-primary')} htmlFor="">Product's name</label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Please enter your name"
                  />
                  <ErrorMessage style={{color : "red"}} name="name" component="span" className={cx('form-err')} ></ErrorMessage>
                </p>
                <p>
                  <label className={cx('text-primary')} htmlFor="">Quantity</label>
                  <Field
                    type="text"
                    name ="quantity"
                    id="quantity"
                    required
                    placeholder="Please enter your price"
                  />
                  <ErrorMessage style={{color : "red"}} name="quantity" component="span" className={cx('form-err')} ></ErrorMessage>
                </p>
               
                <div className={cx('form-group')}> 
                  <label
                    htmlFor
                    className={cx('col-sm-2 col-form-label text-primary')}  
                  >
                    Size
                  </label>
                  <div className={cx('form-check-inline')}>  
                    <input
                      className={cx('form-check-input')}   
                      type="checkbox"
                      id="XS"
                      defaultValue
                    />
                    <label
                      className={cx('form-check-label text-primary')}  
                      htmlFor="XS"
                    >
                      XS
                    </label>
                  </div>
                  <div className={cx('form-check-inline')}>
                    <input
                      className={cx('form-check-input')}
                      type="checkbox"
                      id="S"
                      defaultValue
                    />
                    <label
                      className={cx('form-check-label text-primary')}
                      htmlFor="S"
                    >
                      S
                    </label>
                  </div>
                  <div className={cx('form-check-inline')}>
                    <input
                      className={cx('form-check-input')}
                      type="checkbox"
                      id="M"
                      defaultValue
                    />
                    <label
                      className={cx('form-check-label text-primary')}
                      htmlFor="M"
                    >
                      M
                    </label>
                  </div>
                  <div className={cx('form-check-inline')}>
                    <input
                      className={cx('form-check-input')}
                      type="checkbox"
                      id="L"
                      defaultValue
                    />
                    <label
                      className={cx('form-check-label text-primary')}
                      htmlFor="L"
                    >
                      L
                    </label>
                  </div>
                  <div className={cx('form-check-inline')}>
                    <input
                      className={cx('form-check-input')}
                      type="checkbox"
                      id="XL"
                      defaultValue
                    />
                    <label
                      className={cx('form-check-label text-primary')}
                      htmlFor="XL"
                    >
                      XL
                    </label>
                  </div>
                  <div className={cx('form-check-inline')}>
                    <input
                      className={cx('form-check-input')}
                      type="checkbox"
                      id="XXL"
                      defaultValue
                    />
                    <label
                      className={cx('form-check-label text-primary')}
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
                  </div> */}
                {/* </div> */}
                <div className={cx('form-group')}>
                  <label htmlFor="category" className={cx('text-primary')}>
                    Category Product
                  </label>
                  <select
                    className={cx('form-select')}  
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
                  <label className={cx('text-primary')}>Price</label>
                  <Field
                    type="text"
                    name="price"
                    id="price"
                    required
                    placeholder="Please enter your price"
                  />
                  <ErrorMessage style={{color : "red"}} name="price" component="span" className={cx('form-err')} ></ErrorMessage>
                </p>
                <p className={cx('full')}>
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
