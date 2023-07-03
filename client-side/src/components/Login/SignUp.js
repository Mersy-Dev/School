import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Body/home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setErrorMessage("");
  }, [email]);

  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
      const URI = "http://localhost:5500/users/sign";
      axios
        .post(URI, values)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          navigate("/admindashboard");

          // localStorage.setItem("token", res.data.token)
        })
        .catch((err) => {
          console.log(err);
          // alert(err.response.data.message)
          if (values.email) {
            setErrorMessage(
              "Email already in use exists. Please use a different email."
            );
          } else {
          }
        });
    },

    validationSchema: yup.object({
      firstName: yup
        .string()
        .required("This field is required")
        .min(8, "minimum of 8 characters"),
      lastName: yup
        .string()
        .required("This field is required")
        .min(8, "minimum of 8 characters"),
      userName: yup
        .string()
        .required("This field is required")
        .min(8, "minimum of 8 characters"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("This field is required"),
      password: yup
        .string()
        .required("This field is required")
        .min(8, "minimum of 8 characters with special characters"),
    }),
  });

  console.log(formik.touched);

  return (
    <>
      <div className="body-login">
        <div className="black-fill">
          {" "}
          <br /> <br />
          <div className="d-flex justify-content-center align-items-center flex-column">
            <form className="login" onSubmit={formik.handleSubmit}>
              <div className="text-center">
                <img src="Minion.png" alt="" width={120} />
              </div>
              <h3>SignUp</h3>
              <small className="text-danger">
                {errorMessage && <p>{errorMessage}</p>}
              </small>

              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className={formik.touched.firstName && formik.errors.firstName ? "form-control is-invalid" : "form-control"}
                  onChange={formik.handleChange}
                  name="firstName"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && (
                  <small className="text-danger">
                    {formik.errors.firstName}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className={
                    formik.touched.lastName && formik.errors.lastName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  name="lastName"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && (
                  <small className="text-danger">
                    {formik.errors.lastName}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className={
                    formik.touched.userName && formik.errors.userName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  name="userName"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.userName && (
                  <small className="text-danger">
                    {formik.errors.userName}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  name="email"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && (
                  <small className="text-danger">{formik.errors.email}</small>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="Password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  name="password"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">SignUp As</label>
                <select className="form-control">
                  <option value="1">Admin</option>
                  <option value="2">Teacher</option>
                  <option value="3">Student</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary ">
                SignUp
              </button>
              <button className="btn btn-primary m-3">
                <Link className="text-decoration-none text-white" to="/login">
                  Login
                </Link>
              </button>

              <button className="btn btn-warning m-4 justify-content-end">
                <Link className="text-decoration-none" to="/">
                  Home
                </Link>
              </button>
            </form>

            <br />

            <div className="text-center text-light mt-5">
              Copyright &copy; 2023 Minions School. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

// < form className = 'login' >
//                         <div className="text-center">
//                             <img src="Minion.png" alt="" width={120} />
//                         </div>
//                         <h3>SignUp</h3>
//                         <div className="mb-3">
//                             <label className="form-label">First Name</label>
//                             <input type="text" className="form-control" onChange={(e)=>setfirstName(e.target.value)}/>
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Last Name</label>
//                             <input type="text" className="form-control" onChange={(e)=>setlastName(e.target.value)}/>
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Username</label>
//                             <input type="text" className="form-control" onChange={(e)=>setuserName(e.target.value)}/>
//                         </div>
//                          <div className="mb-3">
//                             <label className="form-label">Email</label>
//                             <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Password</label>
//                             <input type="Password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
//                         </div>

//                         <div className="mb-3">
//                             <label className="form-label">SignUp As</label>
//                             <select className="form-control">
//                                 <option value="1">Admin</option>
//                                 <option value="2">Teacher</option>
//                                 <option value="3">Student</option>

//                             </select>
//                         </div>
//                         <button type="submit" className="btn btn-primary " onClick={signUp}>SignUp</button>
//                         <button className="btn btn-primary m-3"><Link className='text-decoration-none text-white' to='/login'>Login</Link></button>

//                         <button className='btn btn-warning m-4 justify-content-end'><Link className='text-decoration-none' to='/home'>Home</Link></button>
//                     </form >
