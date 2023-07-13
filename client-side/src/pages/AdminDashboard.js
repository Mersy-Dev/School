import React from 'react'
import BodyNav from '../components/Navbar/BodyNav'
import { Link, useNavigate } from 'react-router-dom';
import '../components/Body/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBookOpen, faCalendar, faCogs, faColumns, faCubes, faEnvelope, faHippo, faPencil, faSignOut, faUserGraduate, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice'



const AdminDashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { admin } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
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
            <h6 className="nav-item"><Link className='text-decoration-none' to='/adlog'  >Logout</Link></h6>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="container text-center">
          <div className="row row-cols-5">
            <a className='col btn btn-dark m-2 py-3' href="/teachers_page"><FontAwesomeIcon className='ico' icon={faUserTie} /> <br /> Teachers </a>
            <a className='col btn btn-dark m-2 py-3' href="/stud_page"><FontAwesomeIcon className='ico' icon={faUserGraduate} /> <br /> Student </a>
            <a className='col btn btn-dark m-2 py-3' href=""><FontAwesomeIcon className='ico' icon={faPencil} /> <br /> Registrar Office </a>
            <a className='col btn btn-dark m-2 py-3' href=""><FontAwesomeIcon className='ico' icon={faCubes} /> <br /> Classes </a>
            <a className='col btn btn-dark m-2 py-3' href=""><FontAwesomeIcon className='ico' icon={faColumns} /> <br /> Sections </a>
            <a className='col btn btn-dark m-2 py-3' href=""><FontAwesomeIcon className='ico' icon={faCalendar} /> <br /> Schedules </a>
            <a className='col btn btn-dark m-2 py-3' href=""><FontAwesomeIcon className='ico' icon={faBookOpen} /> <br /> Courses </a>
            <a className='col btn btn-dark m-2 py-3' href=""><FontAwesomeIcon className='ico' icon={faEnvelope} /> <br /> Messages </a>
            <a className='col btn btn-primary m-2 py-3 col-5' href=""><FontAwesomeIcon className='ico' icon={faCogs} /> <br /> Settings </a>
            <Link className='col btn btn-warning m-2 py-3 col-5 text-decoration-none'   onClick={onLogout} ><FontAwesomeIcon className='ico' icon={faSignOut} /> <br />Logout</Link>



          </div>

        </div>
      </div>


    </>
  )
}

export default AdminDashboard