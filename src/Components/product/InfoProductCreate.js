
import * as ProductService from "../../Services/Product/ProductService.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../product/InfoProductCreate.module.css";
import classNames from "classnames/bind";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { imageDb } from '../../FirebaseProduct/ConfigProduct.js';
import { v4 } from 'uuid'
import imgProduct from '../../Assets/Images/Product/upload-image.webp';



const cx = classNames.bind(styles);

export default function InfoProductCreate() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const productCategoryList = [
    {
      id: 1,
      name: 'Nam',
    },
    {
      id: 2,
      name: 'Nữ',
    },
    {
      id: 3,
      name: 'Trẻ em',
    }
  ];

  const sizeList = [
    {
      id: 1,
      size: 'XS',
    },
    {
      id: 2,
      size: 'S',
    },
    {
      id: 3,
      size: 'M',
    },
    {
      id: 4,
      size: 'L',
    },
    {
      id: 5,
      size: 'XL',
    },
    {
      id: 6,
      size: 'XXL',
    }
  ];

  const infoProductInit = {
    productCode: "",
    name: "",
    quantity: "",
    image: "",
    price: "",
    productCategory: JSON.stringify(productCategoryList[0]),
    size: JSON.stringify(sizeList[0])

  };



  const productValidate = {
    productCode: Yup.string()
      .required("Vui lòng điền vào thông tin!")
      .matches(/^H[0-9]{3,20}$/, "Không đúng định dạng"),
    name: Yup.string()
      .required("Vui lòng điền vào thông tin!")
      .matches(/^[A-ZÁ+]+[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểìíịỉĩễòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđA-Z0-9 /]{2,255}$/, "Độ dài ký tự phải từ 2 đến 255 và không chứa ký tự đặc biệt,chữ cái đầu tiên phải viết hoa"),
    quantity: Yup.number()
      .required("Vui lòng điền vào thông tin!")
      .min(1, "Số lượng phải từ 1 trở lên"),
    price: Yup.number()
      .required("Vui lòng điền vào thông tin!")
      .min(10000, "Giá phải từ 10.000 VND trở lên"),
    image: Yup.mixed().required("Vui Lòng Chọn Ảnh")
  }



  const uploadFirebase = async (selectedFile) => {
    if (selectedFile) {
      const imgRef = ref(imageDb, `files/${v4()}`);
      console.log(selectedFile);
      await uploadBytes(imgRef, selectedFile);
      return await getDownloadURL(imgRef);
    }
    return null
  };

  const saveInfoProduct = async (values) => {
    try {
      const imgUrl = await uploadFirebase(values['image']);
      const obj = {
        ...values,
        productCategory: JSON.parse(values.productCategory),
        size: JSON.parse(values.size),
        image: imgUrl

      };

      await ProductService.saveInfoProduct(obj);
      notifySubmit();
      navigate("/warehouse/goods")
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError('Mã Sản Phẩm Đã Tồn Tại');
      } else {
        console.error(error);
      }
    }
  };

  const notifySubmit = () => {
    toast.success('Thêm mới thông tin sản phẩm thành công!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

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
                  <i className={cx('fa fa-road')} /> Số 10,Trần Cao Vân
                </li>
                <li>
                  <i className={cx('fa fa-phone')} /> (555) 555-5555
                </li>
                <li>
                  <i className={cx('fa fa-envelope')} /> fashionshop@phoenix.com
                </li>
              </ul>
            </div>

            <div className={cx('contact')}>
              <h3 className={cx('text-primary')}>Thêm Thông Tin Hàng Hóa</h3>
              <Form>
                <p>
                  <label className={cx('text-primary')} htmlFor="">Mã hàng hóa</label>
                  <Field
                    type="text"
                    name="productCode"
                    id="productCode"
                    required
                    placeholder="
                    Vui lòng nhập mã sản phẩm"
                  />
                  <ErrorMessage style={{ color: "red" }} name="productCode" component="span" className={cx('form-err')} ></ErrorMessage>
                  {error && <div className={cx('error-message')}>{error}</div>}
                </p>
                <p>
                  <label className={cx('text-primary')} htmlFor="">Tên hàng hóa</label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="
                    Vui lòng nhập tên sản phẩm"
                  />
                  <ErrorMessage style={{ color: "red" }} name="name" component="span" className={cx('form-err')} ></ErrorMessage>
                </p>
                <p>
                  <label className={cx('text-primary')} htmlFor="">Số lượng</label>
                  <Field
                    type="text"
                    name="quantity"
                    id="quantity"
                    required
                    placeholder="
                    Vui lòng nhập số lượng sản phẩm"
                  />
                  <ErrorMessage style={{ color: "red" }} name="quantity" component="span" className={cx('form-err')} ></ErrorMessage>
                </p>
                <div className={cx('custom-file')}>
                  <label htmlFor="input-file" className={cx('text-primary')}>
                    Hình ảnh
                    <img src={imgProduct} className={cx('pictureCreate')} />
                  </label>
                  <Field
                    required
                    name="image"
                    type="file"
                    accept="image/jpeg, image/png, image/jpg"
                    id="input-file"
                    className={cx("input-imgg")}
                  />
                  <ErrorMessage style={{ color: "red" }} name="image" component="span" className={cx('form-err')} ></ErrorMessage>
                </div>

                <div className={cx('form-group')}>
                  <label className={cx('text-primary')}>Giá</label>
                  <Field
                    type="text"
                    name="price"
                    id="price"
                    required
                    placeholder="
                    Vui lòng nhập giá sẩn phẩm"
                  />
                  <ErrorMessage style={{ color: "red" }} name="price" component="span" className={cx('form-err')} ></ErrorMessage>
                </div>
                <div className={cx('form-group')}>
                  <label htmlFor="category" className={cx('text-primary')}>
                    Loại hàng hóa
                  </label>
                  <Field as="select" name="productCategory" className={cx('form-select')} aria-label="Default select example">
                    {productCategoryList.map((item) => (
                      <option key={item.id} value={JSON.stringify(item)}>
                        {item.name}
                      </option>
                    ))}
                  </Field>
                </div>


                <div className={cx('form-group')}>
                  <label htmlFor="size" className={cx('text-primary')}>
                    Size
                  </label>
                  <Field as="select" name="size" className={cx('form-select')} aria-label="Default select example">
                    {sizeList.map((item) => (
                      <option key={item.id} value={JSON.stringify(item)}>
                        {item.size}
                      </option>
                    ))}
                  </Field>
                </div>


                {/* 
                <div className={cx('form-group')}>
                  <label
                    htmlFor
                    className={cx('col-sm-2 col-form-label text-primary')}
                  >
                    Size
                  </label>
                  <div className={cx('form-check-inline')}>
                    <Field
                      className={cx('form-check-input')}
                      type="checkbox"
                      id="XS"
                      name="size"
                      value="XS"
                    />

                    <label
                      className={cx('form-check-label text-primary')}
                      htmlFor="XS"
                    >
                      XS
                    </label>
                  </div>
                  <div className={cx('form-check-inline')}>
                    <Field
                      className={cx('form-check-input')}
                      type="checkbox"
                      id="S"
                      name="size"
                      value="S"
                    />
                    <label
                      className={cx('form-check-label text-primary')}
                      htmlFor="S"
                    >
                      S
                    </label>
                  </div>
                  <div className={cx('form-check-inline')}>
                    <Field
                      className={cx('form-check-input')}
                      type="checkbox"
                      id="M"
                      name="size"
                      value="M"
                    />
                    <label
                      className={cx('form-check-label text-primary')}
                      htmlFor="M"
                    >
                      M
                    </label>
                  </div>
                  <div className={cx('form-check-inline')}>
                    <Field
                      className={cx('form-check-input')}
                      type="checkbox"
                      id="L"
                      name="size"
                      value="L"
                    />
                    <label
                      className={cx('form-check-label text-primary')}
                      htmlFor="L"
                    >
                      L
                    </label>
                  </div>
                  <div className={cx('form-check-inline')}>
                    <Field
                      className={cx('form-check-input')}
                      type="checkbox"
                      id="XL"
                      name="size"
                      value="XL"
                    />
                    <label
                      className={cx('form-check-label text-primary')}
                      htmlFor="XL"
                    >
                      XL
                    </label>
                  </div>
                  <div className={cx('form-check-inline')}>
                    <Field
                      className={cx('form-check-input')}
                      type="checkbox"
                      id="XXL"
                      name="size"
                      value="XXL"
                    />
                    <label
                      className={cx('form-check-label text-primary')}
                      htmlFor="XXL"
                    >
                      XXL
                    </label>
                  </div>
                </div> */}

                <p className={cx('full')}>
                  <button type="submit">Thêm</button>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
      <ToastContainer />
    </>
  );
}
