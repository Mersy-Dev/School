import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faUserGraduate, faUserTie } from '@fortawesome/free-solid-svg-icons'
import '../../components/Body/home.css'


function Identiti() {
    return (
        <>
            <div className="container mt-5 row">
                <div className="container text-center bg-secondary-subtle w-50 holder">
                    <a className='col-4 user btn btn-dark py-3' href="/adreg"><FontAwesomeIcon className='ico' icon={faUserDoctor} /> <br /> Admin </a>

                    <a className='col-4 user btn btn-dark  py-3' href="/teachreg"><FontAwesomeIcon className='ico' icon={faUserTie} /> <br /> Teachers </a>
                    <a className='col-4  user btn btn-dark py-3' href="studreg"><FontAwesomeIcon className='ico' icon={faUserGraduate} /> <br /> Student </a>

                </div>
            </div>

        </>
    )
}

export default Identiti