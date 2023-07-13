import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import BodyNav from '../../Navbar/BodyNav';
import axios from 'axios';
import '../home.css'
import { } from '@fortawesome/free-solid-svg-icons';


const EditTeach = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [getSpecificTeacher, setSpecificteachers] = useState("");


    const [firstName, setfirstName] = useState(getSpecificTeacher.firstName);
    const [lastName, setlastName] = useState(getSpecificTeacher.lastName);
    const [email, setEmail] = useState(getSpecificTeacher.email);
    const [phone, setPhone] = useState(getSpecificTeacher.phone);
    const [password, setPassword] = useState(getSpecificTeacher.password);
    const [address, setAddress] = useState(getSpecificTeacher.address);
    const [address2, setAddress2] = useState(getSpecificTeacher.address2)
    const [city, setCity] = useState(getSpecificTeacher.city);
    const [sttate, setSttate] = useState(getSpecificTeacher.sttate);
    const [zip, setZip] = useState(getSpecificTeacher.zip)



    useEffect(() => {
        axios.get(`http://localhost:5500/users/editTeach/${params.id}`).then((response) => {

            setSpecificteachers(response.data);
            console.log(response);
            return
        })

    }, [])

    const updateTeachData = { firstName, lastName, email, password, phone, sttate, address, address2, city, zip }
    // console.log(getSpecificTeacher, "check id from url");
    const updateTeacher = (val) => {
        console.log(val);
        try {
            axios.put(`http://localhost:5500/users/editTeach/${params.id}`, updateTeachData).then((response) => {
                console.log(response.data);
                alert("Updated Teacher Submitted")

            })
        } catch (error) {
            console.log(error.response)
        }
        navigate("/teachers_page");

    }


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
                        <h6 className="nav-item"><Link className='text-decoration-none' to='/adlog'>Logout</Link></h6>
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
                < form className='login' >
                    <div className=" border border-rounded p-4 m-4 row g-3">

                        <div className='row g-3'>
                            <div className="col">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" placeholder={getSpecificTeacher.firstName} onChange={(e) => setfirstName(e.target.value)} />

                            </div>
                            <div className="col">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder={getSpecificTeacher.lastName} onChange={(e) => setlastName(e.target.value)} />

                            </div>
                        </div>

                        <div className="col-md-4">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder={getSpecificTeacher.email} onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className="col-md-4">
                            <label for="inputText" className="form-label">Phone</label>
                            <input type="number" className="form-control" placeholder={getSpecificTeacher.phone} onChange={(e) => setPhone(e.target.value)} />

                        </div>
                        <div className="col-md-4">
                            <label for="exampleInputPassword" className="form-label">Password</label>
                            <input type="text" className="form-control" placeholder={getSpecificTeacher.password} onChange={(e) => setPassword(e.target.value)} />

                        </div>

                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className='form-control' placeholder={getSpecificTeacher.address} id="" onChange={(e) => setAddress(e.target.value)} />
                            <small></small>
                        </div>

                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className='form-control' placeholder={getSpecificTeacher.address2} onChange={(e) => setAddress2(e.target.value)} />

                        </div>

                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className='form-control' placeholder={getSpecificTeacher.city} onChange={(e) => setCity(e.target.value)} name="city" id="" />
                        </div>

                        <div className="col-md-4">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                                <option value="">...</option>
                                <option onChange={(e) => setSttate(e.target.value)} value="">Abia(umu)</option>
                                <option onChange={(e) => setSttate(e.target.value)} value="">Abia(umu)</option>
                                <option onChange={(e) => setSttate(e.target.value)} value="">Abia(umu)</option>


                            </select>
                        </div>

                        <div className="col-md-2">
                            <label for="inputZip" className="form-label">Zip</label>
                            <input type="text" className='form-control' placeholder={getSpecificTeacher.zip} onChange={(e) => setZip(e.target.value)} id="" />
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" onClick={updateTeacher} className="btn btn-primary">Add Teachers</button>
                        </div>

                    </div>


                </form >


                {/* <form onSubmit={formik.handleSubmit} className="">
                    <div className=" border border-rounded p-4 m-4 row g-3">
                        <div className='row g-3'>
                            <div className="col">
                                <label for="exampleInputFname" className="form-label">First Name</label>
                                <input className='form-control' type="text" onChange={(e)} name="firstName" id="" />
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
                            <input type="number" className={formik.touched.phone && formik.errors.phone ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="phone" placeholder="+234" id="inputNum" />
                            {formik.touched.phone && (<small className="text-danger">{formik.errors.phone}</small>)}
                        </div>

                        <div className="col-md-4">
                            <label for="exampleInputPassword" className="form-label">Password</label>
                            <input type="text" className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="password" onBlur={formik.handleBlur} />
                            {formik.touched.password && (<small className="text-danger">{formik.errors.password}</small>)}
                        </div>

                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className={formik.touched.address && formik.errors.address ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="address" id="inputAddress" placeholder="1234 Main St" />
                            {formik.touched.address && (<small className="text-danger">{formik.errors.address}</small>)}

                        </div>

                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className={formik.touched.address2 && formik.errors.address2 ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="address2" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            {formik.touched.address2 && (<small className="text-danger">{formik.errors.address2}</small>)}
                        </div>

                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className={formik.touched.city && formik.errors.city ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="city" id="inputCity" />
                            {formik.touched.city && (<small className="text-danger">{formik.errors.city}</small>)}

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
                            <input type="text" className={formik.touched.address && formik.errors.address ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} name="zip" id="inputZip" />
                            {formik.touched.zip && (<small className="text-danger">{formik.errors.zip}</small>)}

                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Add Teachers</button>
                        </div>

                    </div>
                </form> */}


            </div>




        </>
    )
}

export default EditTeach