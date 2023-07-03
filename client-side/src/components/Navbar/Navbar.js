import React from 'react'
import BodyNav from './BodyNav';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://i.pinimg.com/236x/ec/20/9e/ec209eb75bab1ccaee95fb7c727a418f.jpg" width="50px" height="50px" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <BodyNav dash="dash" admin="admin" teach="teach" stud="stud" regist="regist" settings="settings"  sty="nav-items nav-link" href="#"  a="nav-link active" aa="nav-link" />
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li> */}

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>


          </div>
          <div className="navbar-nav me-auto pe-5 mb-2 mb-lg-0">
            <h6 className="nav-item"><Link className='text-decoration-none' to='/login'>Login</Link></h6>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar