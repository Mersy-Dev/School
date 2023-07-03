import { React, useEffect, useState } from 'react'
import BodyNav from '../../Navbar/BodyNav'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import '../../Body/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';


const TeacersPage = () => {

    const [get, setGetAll] = useState(null)
    const Navigate = useNavigate()

    const url = "http://localhost:5500/users/getTeach";

    useEffect(() => {
        axios.get(url).then((response) => {

            setGetAll(response.data);
            console.log(response);

        })
    }, [])

    const getUpdaTeach = () =>{
        
    }

    const deleteData = (id) =>{
        console.log(id)
        try {
            axios.delete(`http://localhost:5500/users/deletTeach/${id}`).then(response =>{
                alert("Teacher Deleted")
                console.log(response)
                Navigate("/teachers_page")
                return

            }).catch(error=>{
                console.log(error)
            })
        } catch (error) {
            
        }
    
    }
    if (!get) return null;
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


                <div className='tech-list'>
                    <h1>Teachers List</h1>

                    <div className="tabl m-4 rounded">
                        <table className=" table table-hover table-primary rounded">
                            <thead>
                                <tr>
                                    <th className='fs-6' scope="col">#</th>
                                    <th className='fs-6' scope="col">Image</th>
                                    <th className='fs-6' scope="col">First</th>
                                    <th className='fs-6' scope="col">Last</th>
                                    <th className='fs-6' scope="col">phone</th>
                                    <th className='fs-6' scope="col">Email</th>
                                    <th className='fs-6' scope="col">address</th>
                                    <th className='fs-6' scope="col">state</th>
                                    <th className='fs-6' scope="col">city</th>
                                    {/* <th className='fs-6' scope="col">zip</th> */}


                                    <th className='fs-6' scope="col">Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {get.map((data, index) =>(
                                <tr key={index}>
                                    <th className='fs-5' scope="row">{index+1}</th>
                                    <td className='fs-6 m-2'></td>
                                    <td className='fs-6 m-2'>{data.firstName}</td>
                                    <td className='fs-6 m-2'>{data.lastName}</td>
                                    <td className='fs-6 m-2'>{data.phone}</td>
                                    <td className='fs-6 m-2'>{data.email}</td>
                                    <td className='fs-6 m-2'>{data.address}</td>
                                    <td className='fs-6 m-2'>{data.sttate}</td>
                                    <td className='fs-6 m-2'>{data.city}</td>
                                    {/* <td className='fs-6 m-2'>{data.zip}</td> */}


                                    <td className='fs-6 m-2'>
                                        <div className='d-flex'>
                                            <Link className='m-3' to={`/edit_teac/${data._id}`}><FontAwesomeIcon className='fs-6 my-1' icon={faEdit} /></Link>
                                            <FontAwesomeIcon className='fs-6 mt-3 text-danger bin' icon={faTrashCan} value={"Delete"} onClick={(e)=>{deleteData(data._id)}} type="button" />
                                    
                                        </div>
                                    
                                    </td>



                                </tr>
                      
                            ))}


                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </>
    )
}

export default TeacersPage