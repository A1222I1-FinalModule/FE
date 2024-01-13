import style from "../Discount/createDiscount.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as discounts from "../../Services/API/Discount/discount";
export function CreateDiscount() {
  const navigate = useNavigate();
  const initDiscount = {
    discountCode: "",
    name: "",
    rewardPoint: "",
    condition: "",
    customerType: {
      id: 2
    }
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
      .matches(/^[A-Z][a-zA-Z0-9 /]{2,29}$/, "Not format"),
    rewardPoint: Yup.number()
      .required("Not Empty")
      .min(0, "Reward Point must be at least 0")
      .max(1000, "Reward Point must be at most 1000"),
    condition: Yup.number()
      .required("Not Empty")
      .min(1000, "Condition must be at least 1000")
      .max(100000000, "Condition must be at most 100,000,000"),
    beginDate: Yup.date().required("Not Empty"),
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
      console.log("Full",temp.data);
      if (temp=== true) {
        console.log("API response data:", temp.data===true);
        return !temp.data;
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
            toast.success("Đăng kí thành công");
          }}
        >
          <Form>
            <div className={style["form-row"]}>
              <div>
                <span className="label">Type</span>
                <div className="col-sm-10" style={{ width: "500px" }}>
                  <Field
                    as="select"
                    name="customerType.id"
                    className="form-select"
                  >
                    <option value={1}>Regular</option>
                    <option value={2}>Vip</option>
                    <option value={3}>Normal</option>
                  </Field>
                </div>
              </div>
            </div>
            <div className={style["form-row"]}>
              <div>
                <span className={style["label"]}>Discount Code</span>
                <Field
                  class="form-control"
                  type="text"
                  name="discountCode"
                  placeholder="S001"
                />
                <ErrorMessage
                  name="discountCode"
                  component="span"
                  className="form-err"
                ></ErrorMessage>
              </div>
              <div>
                <span className={style["label"]}>Name Discount</span>
                <Field
                  class="form-control"
                  type="text"
                  name="name"
                  placeholder="Sale 2/2"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="form-err"
                ></ErrorMessage>
              </div>
            </div>
            <div className={style["form-row"]}>
              <div>
                <span className={style["label"]}>Reward Point</span>
                <Field
                  class="form-control"
                  type="text"
                  name="rewardPoint"
                  placeholder="350"
                />
                <ErrorMessage
                  name="rewardPoint"
                  component="span"
                  className="form-err"
                ></ErrorMessage>
              </div>
              <div>
                <span className={style["label"]}>Condition</span>
                <Field
                  class="form-control"
                  type="text"
                  name="condition"
                  placeholder="500.000"
                />
                <ErrorMessage
                  name="condition"
                  component="span"
                  className="form-err"
                ></ErrorMessage>
              </div>
            </div>
            <div className={style["form-row"]}>
              <div>
                <span className={style["label"]}>Start Date</span>
                <Field class="form-control" name="beginDate" type="date" />
              </div>
              <div>
                <span className={style["label"]}>End Date</span>
                <Field class="form-control" name="endDate" type="date" />
                <ErrorMessage
                  name="endDate"
                  component="span"
                  className="form-err"
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
