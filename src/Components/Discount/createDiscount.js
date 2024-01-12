import "./createDiscount.css";
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
import * as rentService from "../../Services/API/Customer/customer";
export function CreateDiscount() {
  const [discount, setDiscount] = useState([]);
  const navigate = useNavigate();
  const initDiscount = {
    id: "",
    name: "",
    rewardPoint: "",
    condition: "",
    type:"1"
  };
  const validateDiscount = {
    id: Yup.string()
      .required("Not Empty")
      .matches(/^C[a-zA-Z0-9]{2,9}$/, "Not format"),
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
    endDate: Yup.date().required("Not Empty")
    .test(
      "is-greater",
      "End Date should be later than Start Date",
      function(value) {
        const { beginDate } = this.parent;
        return beginDate && value && new Date(value) >= new Date(beginDate);
      }
    )
  };
  const formatDate = (dateStr) => {
    if (dateStr) {
      const [year, month, day] = dateStr.split("-");
      return `${day}-${month}-${year}`;
    }
    return '';
  };

const handleSubmit = async (values) => {
    // const formattedValues = {
    //   ...values,
    //   beginDate: formatDate(values.beginDate),
    //   endDate: formatDate(values.endDate),
    // };

    // await rentService.addDiscount(formattedValues);
    // navigate("/listDiscount");
  };
  return (
    <div className="container-main">
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
          <div className="form-row">
            <div>
              <span className="label">Type</span>
              <div className="col-sm-10" style={{ width: "500px" }}>
                <Field as="select" name="type" className="form-select">
                  <option value={"1"}>VIP</option>
                  <option value={"2"}>NORMAL</option>
                </Field>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div>
              <span class="label">Discount Code</span>
              <Field
                class="form-control"
                type="text"
                name="id"
                placeholder="S001"
              />
              <ErrorMessage
                name="id"
                component="span"
                className="form-err"
              ></ErrorMessage>
            </div>
            <div>
              <span class="label">Name Discount</span>
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
          <div className="form-row">
            <div>
              <span class="label">Reward Point</span>
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
              <span class="label">Condition</span>
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
          <div className="form-row">
            <div>
              <span class="label">Start Date</span>
              <Field class="form-control" name="beginDate" type="date" />
            </div>
            <div>
              <span class="label">End Date</span>
              <Field class="form-control" name="endDate" type="date" />
              <ErrorMessage
                name="endDate"
                component="span"
                className="form-err"
              ></ErrorMessage>
            </div>
          </div>
          <div className="form-row buttons">
            <button type="submit" className="btn btn-success">
              Oke
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
