import React, { useState } from "react";
import "../../assets/Styles/mdb.min.css";
import { LoginAPI } from "../../Services/API";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Services/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import {
  ERROR_FIELD_EMPTY,
  ERROR_FIELD_HAS_SPECIAL_CHARACTERS,
  ERROR_UNAUTHORIZED,
  REGEX_SPECIAL_CHARACTERS,
} from "../../Constants/LoginConstant";
const Login = () => {
  const user = useUser();
  const navigate = useNavigate();
  const defaultInput = {
    username: "",
    password: "",
  };
  const [inputs, setInputs] = useState(defaultInput);
  const [error, setError] = useState("");
  const updateValue = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };
  const resetError = () => setError("");
  const handleLogin = async () => {
    let isValid = true;
    if (
      REGEX_SPECIAL_CHARACTERS.test(inputs.username) ||
      REGEX_SPECIAL_CHARACTERS.test(inputs.password)
    ) {
      isValid = false;
      setError(ERROR_FIELD_HAS_SPECIAL_CHARACTERS);
    }
    if (inputs.username.length === 0 || inputs.password.length === 0) {
      isValid = false;
      setError(ERROR_FIELD_EMPTY);
    }
    if (isValid) {
      LoginAPI(inputs)
        .then(async (response) => {
          return await user.setUser(response);
        })
        .then((roles) => {
          console.log(roles);
          if (roles.length > 0) {
            console.log("done");
            for (let i = 0; i <= roles.length; i++) {
              if (roles[i] === "ROLE_ADMIN") {
                navigate("/admin/dashboard");
              }
            }
          } 
        })
        .catch((error) => {
          setError(ERROR_UNAUTHORIZED)
        });
    }
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-7 d-flex align-items-center"
                  style={{ backgroundColor: "#424242" }}
                >
                  <div className="card-body p-4 p-lg-5 text-black">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <FontAwesomeIcon
                        className="me-3"
                        icon={faCubes}
                        style={{ color: "#ff6219" }}
                        size="2x"
                      />
                      <span className="h1 fw-bold mb-0">ĐĂNG NHẬP</span>
                    </div>

                    <div className="mb-4">
                      <label className="form-label" htmlFor="form2Example17">
                        Tên Tài Khoản
                      </label>
                      <input
                        value={inputs.username}
                        type="email"
                        id="form2Example17"
                        className="form-control form-control-lg"
                        onFocus={() => resetError()}
                        onChange={(e) =>
                          updateValue("username", e.target.value)
                        }
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label" htmlFor="form2Example27">
                        Mật Khẩu
                      </label>
                      <input
                        value={inputs.password}
                        type="password"
                        id="form2Example27"
                        className="form-control form-control-lg"
                        onFocus={() => resetError()}
                        onChange={(e) =>
                          updateValue("password", e.target.value)
                        }
                      />
                    </div>
                    <div style={{ height: "20px" }}>
                      <span style={{ color: "red" }}>{error}</span>
                    </div>
                    <div className="pt-1 mb-4 mt-3">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="button"
                        onClick={() => handleLogin()}
                      >
                        Đăng Nhập
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
