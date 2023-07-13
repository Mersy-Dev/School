import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import BodyNav from '../../Navbar/BodyNav';
import axios from 'axios';
import '../../Body/home.css'
import { } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';



function EditStudent() {
    const params = useParams();

    const navigate = useNavigate();
    const [getSpecificstud, setSpecificstud] = useState("");


    // const student = useSelector(state => state.student.student)
    // const stud = student.find(u => u.id === id)
    // console.log(stud)



    const [firstName, setfirstName] = useState(getSpecificstud.firstName);
    const [lastName, setlastName] = useState(getSpecificstud.lastName);
    const [email, setEmail] = useState(getSpecificstud.email);
    const [phone, setPhone] = useState(getSpecificstud.phone);
    const [password, setPassword] = useState(getSpecificstud.password);
    const [address, setAddress] = useState(getSpecificstud.address);
    const [address2, setAddress2] = useState(getSpecificstud.address2)
    const [city, setCity] = useState(getSpecificstud.city);
    const [sttate, setSttate] = useState(getSpecificstud.sttate);
    const [zip, setZip] = useState(getSpecificstud.zip)




    useEffect(() => {
        axios.get(`http://localhost:5500/student/editStud/${params.id}`).then((response) => {

            setSpecificstud(response.data);
            console.log(response);
            return
        })

    }, [])




    const updateStudData = { firstName, lastName, email, password, phone, sttate, address, address2, city, zip }

    const updateStud = (val) => {
        console.log(val);
        try {
            axios.put(`http://localhost:5500/student/editStud/${params.id}`, updateStudData).then((response) => {
            console.log(response.data);
                alert("Updated Student Submitted")

            })
        } catch (error) {
            console.log(error.response)
        }
        navigate("/stud_page");

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
                    <div className='btn border-white btn-outline-primary'>Students</div>
                    <button className='btn border-white tech-btn '>
                        Student Section
                        <div className='border border-light tech-hld'>
                            <div className="border tech">View Student</div>
                            <div className="border tech"><Link to="/creat_studnt">Add Student</Link></div>

                        </div>
                    </button>
                    <div className='btn border-white btn-outline-primary'>Student Courses</div>
                    <div className='btn border-white btn-outline-primary'>Student General</div>

                </div>




                < form className='login' >
                    <div className=" border border-rounded p-4 m-4 row g-3">

                        <div className='row g-3'>
                            <div className="col">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" placeholder={getSpecificstud.firstName} onChange={(e) => setfirstName(e.target.value)} />

                            </div>
                            <div className="col">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder={getSpecificstud.lastName} onChange={(e) => setlastName(e.target.value)} />

                            </div>
                        </div>

                        <div className="col-md-4">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder={getSpecificstud.email} onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className="col-md-4">
                            <label for="inputText" className="form-label">Phone</label>
                            <input type="number" className="form-control" placeholder={getSpecificstud.phone} onChange={(e) => setPhone(e.target.value)} />

                        </div>
                        <div className="col-md-4">
                            <label for="exampleInputPassword" className="form-label">Password</label>
                            <input type="text" className="form-control" placeholder={getSpecificstud.password} onChange={(e) => setPassword(e.target.value)} />

                        </div>

                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className='form-control' placeholder={getSpecificstud.address} id="" onChange={(e) => setAddress(e.target.value)} />
                            <small></small>
                        </div>

                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className='form-control' placeholder={getSpecificstud.address2} onChange={(e) => setAddress2(e.target.value)} />

                        </div>

                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className='form-control' placeholder={getSpecificstud.city} onChange={(e) => setCity(e.target.value)} name="city" id="" />
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
                            <input type="text" className='form-control' placeholder={getSpecificstud.zip} onChange={(e) => setZip(e.target.value)} id="" />
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
                            <button type="submit" onClick={updateStud} className="btn btn-primary">Add Teachers</button>
                        </div>

                    </div>


                </form >


            </div>



        </>
    )
}

export default EditStudent