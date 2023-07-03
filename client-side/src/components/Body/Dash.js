import React from 'react'
import BodyNav from '../Navbar/BodyNav'
import SideNav from '../Navbar/SideNav'
import { Link } from 'react-router-dom'
import './home.css'

const Dash = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark " id="homeNav">
                <div clas sName="container-fluid w-10">
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

            <div className='d-flex'>
                <div className="sidenav">
                    <SideNav dashh="Dashboard" teah="Teachers" stys="btn border-white btn-outline-primary" sty2="Dashboard" />
                    

                        

                </div>

                <div className="bdy">

                </div>

            </div>


        </>
    )
}

export default Dash