import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import BodyNav from '../../Navbar/BodyNav';
import axios from 'axios';
import * as yup from 'yup';
import '../../Body/home.css'


const TeachersForm = () => {

    const Navigate = useNavigate()

    let formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            phone: "",
            password: "",
            address: "",
            address2: "",
            zip: "",
            city: "",
            sttate: "",


        },

        onSubmit: (data) => {
            const url = "http://localhost:5500/users/creaTeachers";
            console.log(data)
            axios.post(url, data).then((res) => {
                console.log(res)
                alert(res.data.message)
            }).catch((err) => {
                console.log(err)
                alert(err.response.data.message)
            })
            Navigate("/teachers_page")
        },

        validationSchema: yup.object({
            firstName: yup
                .string()
                .required("This field is required"),
            lastName: yup
                .string()
                .required("This field is required"),
            email: yup
                .string()
                .required("This field is required")
                .email("Must be a valid email"),
            phone: yup
                .number()
                .required("This field is required"),
            address: yup
                .string()
                .required("This field is required"),
            password: yup
                .string()
                .required("This field is required"),
            address2: yup
                .string()
                .required("This field is required"),
            zip: yup
                .number()
                .required("This field is required"),
                
            sttate: yup
                .string(),
            city: yup
                .string()
                .required("This field is required"),
                
        }),
    });
    console.log(formik.touched);





    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark " id="homeNav">
                <div className="container-fluid w-10">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <BodyNav dash="Dashboard" admin="Admin" teach="Teachers" clas="Classes" sec="Sections" sch="Schedules" cour="Courses" stud="Student" mssg="Messages" regist="Registrar" settings="Settings" sty="fs-6 fw-bold btn btn-outline-light border me-1 border-none" hef="/teachers_page" href="/admindashboard" a="nav-link active" aa="nav-link" ari="page" />
                        </ul>


                    </div>
                    <div className="navbar-nav me-auto pe-5 mb-2 mb-lg-0">
                        <h6 className="nav-item"><Link className='text-decoration-none' to='/login'>Logout</Link></h6>
                    </div>
                </div>
            </nav>

            <div className="d-flex teach-bdy">
                <div className="sidenav">
                    <div className='btn border-white btn-outline-primary'>Teachers</div>
                    <button className='btn border-white tech-btn '>
                        Teachers Pro
                        <div className='border border-light tech-hld'>
                            <div className="border tech">View Teachers</div>
                            <div className="border tech"><Link to="/creat_tee">Add Teachers</Link></div>

                        </div>
                    </button>
                    <div className='btn border-white btn-outline-primary'>Teachers</div>
                    <div className='btn border-white btn-outline-primary'>Teachers</div>

                </div>








                <form onSubmit={formik.handleSubmit} className="">
                    <div className=" border border-rounded p-4 m-4 row g-3">
                        <div className='row g-3'>
                            <div className="col">
                                <label for="exampleInputFname" className="form-label">First Name</label>
                                <input type="text" className={formik.touched.firstName && formik.errors.firstName ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="firstName" onBlur={formik.handleBlur} />
                                {formik.touched.firstName && (<small className="text-danger">{formik.errors.firstName}</small>)}
                            </div>

                            <div className="col">
                                <label for="exampleInputLname" className="form-label">Last Name</label>
                                <input type="text" className={formik.touched.lastName && formik.errors.lastName ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="lastName" onBlur={formik.handleBlur} />
                                {formik.touched.lastName && (<small className="text-danger">{formik.errors.lastName}</small>)}
                            </div>

                        </div>

                        <div className="col-md-4">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="text" className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="email" onBlur={formik.handleBlur} />
                            {formik.touched.email && (<small className="text-danger">{formik.errors.email}</small>)}
                        </div>

                        <div className="col-md-4">
                            <label for="inputText" className="form-label">Phone</label>
                            <input type="number"  className={formik.touched.phone && formik.errors.phone ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="phone" placeholder="+234" id="inputNum"/>
                            {formik.touched.phone && (<small className="text-danger">{formik.errors.phone}</small> )}
                        </div>

                        <div className="col-md-4">
                            <label for="exampleInputPassword" className="form-label">Password</label>
                            <input type="text" className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="password" onBlur={formik.handleBlur} />
                            {formik.touched.password && (<small className="text-danger">{formik.errors.password}</small>)}
                        </div>

                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className={formik.touched.address && formik.errors.address ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="address" id="inputAddress" onBlur={formik.handleBlur} placeholder="1234 Main St"/>
                            {formik.touched.address && (<small className="text-danger">{formik.errors.address}</small> )}

                        </div>

                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className={formik.touched.address2 && formik.errors.address2 ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="address2" id="inputAddress2" onBlur={formik.handleBlur} placeholder="Apartment, studio, or floor"/>
                            {formik.touched.address2 && (<small className="text-danger">{formik.errors.address2}</small> )}
                        </div>
                        
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className={formik.touched.city && formik.errors.city ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="city" onBlur={formik.handleBlur} id="inputCity"/>
                            {formik.touched.city && (<small className="text-danger">{formik.errors.city}</small> )}

                        </div>

                        <div className="col-md-4">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                           <option value="">...</option>
                           <option value="">Abia(umu)</option>

                            </select>
                        </div>
                        
                        <div className="col-md-2">
                            <label for="inputZip" className="form-label">Zip</label>
                            <input type="text" className={formik.touched.zip && formik.errors.zip ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="zip" onBlur={formik.handleBlur} id="inputZip"/>
                            {formik.touched.zip && (<small className="text-danger">{formik.errors.zip}</small> )}

                        </div>

                        <div className="col-12">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Add Teachers</button>
                        </div>

                    </div>
                </form>
            </div>




        </>
    )
}

export default TeachersForm