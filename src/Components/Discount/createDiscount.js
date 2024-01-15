import style from "../Discount/createDiscount.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as discounts from "../../Services/API/Discount/discount";
import moment from "moment";
export function CreateDiscount() {
  const navigate = useNavigate();
  const initDiscount = {
    discountCode: "",
    name: "",
    rewardPoint: "",
    condition: "",
    customerType: {
      id: 2,
    },
  };
  const validateDiscount = {
    discountCode: Yup.string()
      .required("Not Empty")
      .matches(/^C[a-zA-Z0-9]{2,9}$/, "Not format"),
    // .test(
    //   "discountCode-existence",
    //   "Discount code already exists",
    //   async function (value) {
    //     console.log("Validation function called with value:", value);
    //     try {
    //       const exists = await checkDiscountCodeExistence(value);
    //       console.log("API response:", exists);
    //       return !exists
    //         ? true
    //         : this.createError({ message: "Discount code already exists" });
    //     } catch (error) {
    //       console.error("Error checking discount code existence:", error);
    //       return false;
    //     }
    //   }
    // ),
    name: Yup.string()
      .required("Not Empty")
      .matches(/^[A-Z][a-zA-Z0-9 /]{2,29}$/, "Invalid Characters 3-10"),
    sale: Yup.number()
      .required("Not Empty")
      .min(0, "Sale must be at least 0")
      .max(100, "Sale must be at most 1000"),
    rewardPoint: Yup.number()
      .required("Not Empty")
      .min(0, "Reward Point must be at least 0")
      .max(1000, "Reward Point must be at most 1000"),
    condition: Yup.number()
      .required("Not Empty")
      .min(1000, "Condition must be at least 1000")
      .max(100000000, "Condition must be at most 100,000,000"),
    beginDate: Yup.date()
      .required("Not Empty")
      .test(
        "is-greater",
        "Begin Date should be later than Start Date",
        function (value) {
          const { endDate } = this.parent;
          return endDate && value && new Date(value) <= new Date(endDate);
        }
      ),
    endDate: Yup.date()
      .required("Not Empty")
      .test(
        "is-greater",
        "End Date should be later than Start Date",
        function (value) {
          const { beginDate } = this.parent;
          return beginDate && value && new Date(value) >= new Date(beginDate);
        }
      ),
  };
  const formatDate = (dateStr) => {
    if (dateStr) {
      const [year, month, day] = dateStr.split("-");
      return `${day}-${month}-${year}`;
    }
    return "";
  };

  const handleSubmit = async (values) => {
    const formattedValues = {
      ...values,
      beginDate: formatDate(values.beginDate),
      endDate: formatDate(values.endDate),
    };

    await discounts.addDiscount(formattedValues);
    navigate("/listDiscount");
  };

  const checkDiscountCodeExistence = async (discountCode) => {
    try {
      const temp = await discounts.checkDiscountCodeExistence(discountCode);
      console.log("Full API response:", temp);
      console.log("Full", temp.data);
      if (temp === true) {
        console.log("API response data:");
        return temp;
      } else {
        throw new Error("Invalid API response format");
      }
    } catch (error) {
      console.error("Error checking discount code existence:", error);
      return false;
    }
  };
  return (
    <div className="page-container">
      <div className={style["container-main"]}>
        <h1 style={{ fontFamily: "Verdana" }}>Discount</h1>
        <Formik
          initialValues={initDiscount}
          validationSchema={Yup.object().shape(validateDiscount)}
          onSubmit={(value) => {
            handleSubmit(value);
            toast.success("Create Success");
          }}
        >
          <Form>
            <div className={style["form-row"]}>
              <div>
                <span className={style["label"]}>Type</span>
                <div className="col-sm-10" style={{ width: "240px" }}>
                  <Field
                    as="select"
                    name="customerType.id"
                    className="form-select"
                    style={{ height: "44px" }}
                  >
                    <option value={1}>Regular</option>
                    <option value={2}>Vip</option>
                    <option value={3}>Normal</option>
                  </Field>
                </div>
              </div>
              <div>
                <span className={style["label"]}>
                  Discount Code{" "}
                  <span className={` ${style["required-field"]}`}>*</span>
                </span>
                <Field
                  class="form-control"
                  type="text"
                  name="discountCode"
                  placeholder="S001"
                />
                <ErrorMessage
                  name="discountCode"
                  component="span"
                  className={style["form-err"]}
                ></ErrorMessage>
              </div>
            </div>
            <div className={style["form-row"]}>
              <div>
                <span className={style["label"]}>
                  Name Discount{" "}
                  <span className={` ${style["required-field"]}`}>*</span>
                </span>
                <Field
                  class="form-control"
                  type="text"
                  name="name"
                  placeholder="Sale 2/2"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className={style["form-err"]}
                ></ErrorMessage>
              </div>
              <div>
                <span className={style["label"]}>
                  Sale (%){" "}
                  <span className={` ${style["required-field"]}`}>*</span>
                </span>
                <Field
                  class="form-control"
                  type="text"
                  name="sale"
                  placeholder="20"
                />
                <ErrorMessage
                  name="sale"
                  component="span"
                  className={style["form-err"]}
                ></ErrorMessage>
              </div>
            </div>
            <div className={style["form-row"]}>
              <div>
                <span className={style["label"]}>
                  Reward Point{" "}
                  <span className={` ${style["required-field"]}`}>*</span>
                </span>
                <Field
                  class="form-control"
                  type="text"
                  name="rewardPoint"
                  placeholder="350"
                />
                <ErrorMessage
                  name="rewardPoint"
                  component="span"
                  className={style["form-err"]}
                ></ErrorMessage>
              </div>
              <div>
                <span className={style["label"]}>
                  Condition{" "}
                  <span className={` ${style["required-field"]}`}>*</span>
                </span>
                <Field
                  class="form-control"
                  type="text"
                  name="condition"
                  placeholder="500.000"
                />
                <ErrorMessage
                  name="condition"
                  component="span"
                  className={style["form-err"]}
                ></ErrorMessage>
              </div>
            </div>
            <div className={style["form-row"]}>
              <div>
                <span className={style["label"]}>
                  Start Date{" "}
                  <span className={` ${style["required-field"]}`}>*</span>
                </span>
                <Field class="form-control" name="beginDate" type="date" />
                <ErrorMessage
                  name="beginDate"
                  component="span"
                  className={style["form-err"]}
                ></ErrorMessage>
              </div>
              <div>
                <span className={style["label"]}>
                  End Date{" "}
                  <span className={` ${style["required-field"]}`}>*</span>
                </span>
                <Field class="form-control" name="endDate" type="date" />
                <ErrorMessage
                  name="endDate"
                  component="span"
                  className={style["form-err"]}
                ></ErrorMessage>
              </div>
            </div>
            <div className={`${style.buttons} form-row`}>
              <button
                type="submit"
                className="btn btn-success"
                onClick={() => navigate("/listDiscount")}
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-danger">
                Create
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
