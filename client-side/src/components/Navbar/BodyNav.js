import React from 'react'
import { Link } from 'react-router-dom';
import '../Body/home.css'

const BodyNav = (props) => {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-dark " id="homeNav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://i.pinimg.com/236x/ec/20/9e/ec209eb75bab1ccaee95fb7c727a418f.jpg" width="50px" height="50px" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <a a={props.a} aria-current={props.ari} className={props.sty} href={props.href}>{props.dash}</a>
                <a a={props.aa} className={props.sty}  href={props.hef}>{props.teach}</a>
                <a a={props.aa} className={props.sty}  href={props.href}>{props.stud}</a>
                <a a={props.aa} className={props.sty}  href={props.href}>{props.regist}</a>
                <a a={props.aa} className={props.sty}  href={props.href}>{props.clas}</a>
                <a a={props.aa} className={props.sty}  href={props.href}>{props.sec}</a>
                <a a={props.aa} className={props.sty}  href={props.href}>{props.sch}</a>
                <a a={props.aa} className={props.sty}  href={props.href}>{props.cour}</a>
                <a a={props.aa} className={props.sty}  href={props.href}>{props.mssg}</a>
                <a a={props.aa} className={props.sty}  href={props.href}> {props.settings}</a>


            </ul>
      

          </div>
        </div>
      </nav>



    </>
  )
}

export default BodyNav