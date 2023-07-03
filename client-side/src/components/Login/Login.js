import React from 'react';
import { Link } from 'react-router-dom';
import '../Body/home.css';






const Login = () => {
    return (
        <>
            <div className='body-login'>
                <div className='black-fill'> <br /> <br />
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <form className='login'>
                            <div className="text-center">
                                <img src="Minion.png" alt="" width={120} />
                            </div>
                            <h3>LOGIN</h3>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="Password" className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Login As</label>
                                <select className="form-control">
                                    <option value="1">Admin</option>
                                    <option value="2">Teacher</option>
                                    <option value="3">Student</option>

                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary me-3">Login</button>
                            <button className="btn btn-outline-primary border border-dark "><Link className='text-decoration-none text-white' to='/signup'>Signup</Link></button>

                            <button className='btn btn-outline-info border border-dark m-4'><Link className='text-decoration-none text-dark' to='/home'>Home</Link></button>
                        </form>

                        <br />


                        <div className="text-center text-light mt-5">
                            Copyright &copy; 2023 Minions School. All rights reserved.
                        </div>


                    </div>

                </div>

            </div>


        </>
    )
}

export default Login