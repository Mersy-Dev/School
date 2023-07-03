import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


const home = () => {
  return (
    <>
      <div className='body-home'>
        <div className='black-fill'> <br /> <br />
          <div className="container">
            <nav className="navbar navbar-expand-lg bg-light " id="homeNav">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img src="https://i.pinimg.com/236x/ec/20/9e/ec209eb75bab1ccaee95fb7c727a418f.jpg" width="50px" height="50px" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                  <form className="d-flex w-50" role="search">
                    <input className="form-control me-4 w-75" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-warning border border-dark me-5"><Link className='text-decoration-none text-dark ' to='/signup'>Signup</Link></button>
                  </form>

                </div>
                <div className="navbar-nav me-auto pe-5 mb-2 mb-lg-0">
                    <h6 className="nav-item"><Link className='text-decoration-none' to='/login'>Login</Link></h6>
                </div>
              </div>
            </nav>

            <section className="welcome-text d-flex justify-content-center align-items-center flex-column">
              <img src="Minion.png" alt="" />
              <h4>Welcome To Minions School</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>


            <section id="about" className=" d-flex justify-content-center align-items-center flex-column">
              <div className="card mb-3 card-1">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="Minion.png" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">About</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-body-secondary">Minions School</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="contact" className=" d-flex justify-content-center align-items-center flex-column">
              <form>
                <h3>Contact Us</h3>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <textarea rows="4" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
              </form>

            </section>

            <div className="text-center text-light">
              Copyright &copy; 2023 Minions School. All rights reserved.
            </div>
            <br /><br />






          </div>

        </div>

      </div>

    </>
  )
}

export default home